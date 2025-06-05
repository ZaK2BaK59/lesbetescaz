import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "No code in query" }, { status: 400 });
  }

  const client_id = "4144371611";
  const client_secret = "G8fNUTI1zvFC9nrZ3KhLWnSDAIAzr0e7";
  const redirect_uri = "http://localhost:3000/api/dlive/callback"; // À adapter en prod

  try {
    // 🔐 1. Échange code ➝ access_token / refresh_token
    const tokenRes = await fetch("https://dlive.tv/o/token", {
      method: "POST",
      headers: {
        Authorization:
          "Basic " + Buffer.from(`${client_id}:${client_secret}`).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        redirect_uri,
        code,
      }),
    });

    const tokenData = await tokenRes.json();

    if (!tokenData.access_token) {
      return NextResponse.json({ error: "Token exchange failed", details: tokenData }, { status: 400 });
    }

    const access_token = tokenData.access_token;
    const refresh_token = tokenData.refresh_token;

    // 👤 2. Fetch info user via GraphQL DLive
    const gqlRes = await fetch("https://api.dlive.tv/", {
      method: "POST",
      headers: {
        Authorization: access_token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query {
            me {
              id
              username
              displayname
              avatar
            }
          }
        `,
      }),
    });

    const gqlData = await gqlRes.json();
    const user = gqlData?.data?.me;

    if (!user) {
      return NextResponse.json({ error: "Failed to fetch user info" }, { status: 400 });
    }

    // 🧠 3. Envoi vers backend Flask
    await fetch("http://localhost:3001/api/auth/dlive", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user.username,
        user_id: user.id,
        avatar: user.avatar,
        displayname: user.displayname,
        access_token,
        refresh_token,
      }),
    });
    

    // 🚀 4. Redirection avec les infos dans l'URL
    return NextResponse.redirect(
      `http://localhost:3000?username=${user.username}&avatar=${encodeURIComponent(user.avatar)}`
    );
  } catch (err) {
    console.error("OAuth error:", err);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
