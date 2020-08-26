import React from 'react';
import SignIn from '../../components/SignIn/SignIn';

import './SignInSignUpPage.styles.scss';
import SignUp from '../../components/SignUp/SignUp';

const SignInSignUp = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUp;
