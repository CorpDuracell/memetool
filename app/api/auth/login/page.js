// app/api/auth/login/page.js
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    loginWithRedirect();
  }, [loginWithRedirect]);

  return null; // This page does not render anything
};

export default LoginPage;