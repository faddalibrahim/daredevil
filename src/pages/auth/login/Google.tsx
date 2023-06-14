import React from 'react';
import Button from '@components/button/Button';
import AW_API from '../../../appwrite/api';

interface OAuthResponse {
  redirect: string;
}

const GoogleOAuthButton: React.FC = () => {
  const handleGoogleSignIn = () => {
    AW_API.createAccount()
      .then((response: OAuthResponse) => {
        window.location.href = response.redirect;
      })
      .catch((error:Error) => {
        console.error(error);
      });
  };

  return (
    <Button onClick={handleGoogleSignIn}>Sign in with Google</Button>
  );
};

export default GoogleOAuthButton;
