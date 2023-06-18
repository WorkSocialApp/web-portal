import React, { useState, useEffect } from 'react';
import styles from './Login.module.scss';

export const Login = ({ onChange, loginForm, submitLogin }) => {
	return (
		<div className={styles.login_container}>
			<form onSubmit={submitLogin}>
				<div className={styles.form_group}>
					<div className={styles.form_control}>
						<label htmlFor="login_email">Email</label>
						<input
							value={loginForm.email}
							onChange={onChange}
							id="login_email"
							type="email"
							name="email"
							placeholder="Enter your email address"
						/>
					</div>
					<div className={styles.form_control}>
						<label htmlFor="login_password">Password</label>
						<input
							value={loginForm.password}
							onChange={onChange}
							id="login_password"
							type="password"
							name="password"
							placeholder="Enter your password"
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
