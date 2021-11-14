import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';
<<<<<<< HEAD

=======
>>>>>>> d654bdbd8978651e956e401cf8d065571da3f26c

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
<<<<<<< HEAD
      className="btn-login"
=======
      className="btn btn-primary btn-block"
>>>>>>> d654bdbd8978651e956e401cf8d065571da3f26c
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Button>
  );
};

export default LoginButton;