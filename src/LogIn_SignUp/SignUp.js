import React from 'react';
import SignupForm from '../Auth/SignupForm';
import LoginForm from '../Auth/LoginForm';
import './SignUp.css';

const SignUp = ({ signup, login }) => {
	return (
		<div className='SignUp-Login-Form-Layout'>
			<LoginForm login={login} />
			<p className='SignUp-P'>
				Haven't signed up yet? Sign up below to access additional features the ability to draw more than one
				card at a time. Muddlefog Tarot will always be free, and we will only email you approximately once a
				year!
			</p>
			<SignupForm signup={signup} />
		</div>
	);
};
export default SignUp;
