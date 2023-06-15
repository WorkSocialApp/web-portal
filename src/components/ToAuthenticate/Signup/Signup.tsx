import React, { useState, useEffect } from 'react';
import styles from './Signup.module.scss';

export const Signup = ({ onChange, signupForm, submitSignup }) => {
	console.log(signupForm);
	return (
		<div className={styles}>
			<form onSubmit={submitSignup}>
				<label htmlFor="signup_email">Email</label>
				<input
					value={signupForm.email}
					onChange={onChange}
					id="signup_email"
					type="email"
					name="email"
				/>
				<label htmlFor="signup_password">Password</label>
				<input
					value={signupForm.password}
					onChange={onChange}
					id="signup_password"
					type="password"
					name="password"
				/>
				<label htmlFor="signup_verify_password">Verify Password</label>
				<input
					value={signupForm.verifyPassword}
					onChange={onChange}
					id="signup_verify_password"
					type="password"
					name="verifyPassword"
				/>
				<button>Submit</button>
			</form>
		</div>
	);
};
