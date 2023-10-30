// app/api/auth/login.js
import { handleLogin } from '@auth0/nextjs-auth0';

export default handleLogin({
  async getLoginState(req, res) {
    return {
      returnTo: `${req.headers.origin}/admin`,
    };
  },
});