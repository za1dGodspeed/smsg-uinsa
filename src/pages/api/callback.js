import { createClient } from 'simple-oauth2';

const config = {
  client: {
    id: process.env.GITHUB_CLIENT_ID,
    secret: process.env.GITHUB_CLIENT_SECRET,
  },
  auth: {
    tokenHost: 'https://github.com',
    tokenPath: '/login/oauth/access_token',
    authorizePath: '/login/oauth/authorize',
  },
};

export default async function handler(req, res) {
  const client = createClient(config);

  const { code } = req.query;

  if (!code) {
    return res.status(400).send('Missing authorization code');
  }

  try {
    const result = await client.getToken({ code });
    const token = result.token.access_token;

    res.redirect(`/admin/?token=${token}`);
  } catch (err) {
    console.error('OAuth error:', err);
    res.status(500).send('OAuth failed');
  }
}