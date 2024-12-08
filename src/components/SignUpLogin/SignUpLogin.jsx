import { useState } from 'react';
import { SignUpForm } from './SignUpForm';
import { LoginForm } from './LoginForm';

import logo from '/assets/logo.svg';

export const SignUpLogin = () => {
  const [login, setLogin] = useState(true);

  return (
    <div>
      {login ? (
        <div className="flex flex-col items-center mt-10 gap-20">
          <img src={logo} alt="logo" />
          <LoginForm onSignUp={() => setLogin(false)} />
        </div>
      ) : (
        <div className="flex flex-col items-center mt-10 gap-20">
          <img src={logo} alt="logo" />
          <SignUpForm onLogin={() => setLogin(true)} />
        </div>
      )}
    </div>
  );
};
