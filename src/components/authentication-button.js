import React from 'react';

import LoginButton from './login-button';
import LogoutButton from './logout-button';
import ProfileButton from './profile-button';

import { useAuth0 } from '@auth0/auth0-react';

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  if(isAuthenticated){
    
  const { name, picture, email } = user;
  return(
    <><ProfileButton name={name} /> <LogoutButton /></>
  )
  }
  else{
    return(
      <LoginButton></LoginButton>)
  }
  // return isAuthenticated ? 
  
  // <></>
  // : <LoginButton />;
};

export default AuthenticationButton;