import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
  domain: 'dev-5ifpjp162lv3jyh2.uk.auth0.com',
  clientId: 'qadwBBSWo4G91lXeFx8rkv0wUfDYpN0b',
  clientSecret: 'AsCzZ9lUhZxUaN3xlG5o-_KpuXZmLDMLaNDvedwuGLjude5eMN4vjxi1LWUymPRS',
  scope: 'openid profile',
  redirectUri: 'http://localhost:3000/api/callback',
  postLogoutRedirectUri: 'http://localhost:3000/',
  session: {
    cookieSecret: 'f0HkjkqhyPwN4U13ia1VBo0tCiFXKaa2hrFhDYctz0jUq9YstIrl92x8dCMWhswD',
    cookieLifetime: 60 * 60 * 8, // 8 hours
    cookieDomain: 'your-domain.com',
    storeAccessToken: true
  }
});
