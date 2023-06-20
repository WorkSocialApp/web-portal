import React, { useState, useEffect } from 'react';
import styles from './Signup.module.scss';

export const Signup = ({
	onChange,
	signupForm,
	submitSignup,
	signupFormErrors,
}) => {
	return (
		<div className={styles.signup_container}>
			<form onSubmit={submitSignup}>
				{signupFormErrors && (
					<p className={styles.errors}>{signupFormErrors}</p>
				)}
				<div className={styles.form_group}>
					<div className={styles.form_control}>
						<label htmlFor="signup_email">Email</label>
						<input
							value={signupForm.email}
							onChange={onChange}
							id="signup_email"
							type="email"
							name="email"
							placeholder="Enter your email address"
						/>
					</div>
					<div className={styles.form_control}>
						<label htmlFor="signup_password">Password</label>
						<input
							value={signupForm.password}
							onChange={onChange}
							id="signup_password"
							type="password"
							name="password"
							placeholder="Enter your password"
						/>
					</div>
					<div className={styles.form_control}>
						<label htmlFor="signup_verify_password">
							Verify Password
						</label>
						<input
							value={signupForm.verifyPassword}
							onChange={onChange}
							id="signup_verify_password"
							type="password"
							name="verifyPassword"
							placeholder="Verify your password"
						/>
					</div>
					<div className={styles.form_control}>
						<button className={styles.submit}>Submit</button>
					</div>
				</div>
			</form>
		</div>
	);
};
