import React, { useState, useEffect } from 'react';
import styles from './Login.module.scss';

export const Login = ({ onChange, loginForm, submitLogin }) => {
	// console.log(loginForm);
	return (
		<div className={styles}>
			<form onSubmit={submitLogin}>
				<label htmlFor="login_email">Email</label>
				<input
					value={loginForm.email}
					onChange={onChange}
					id="login_email"
					type="email"
					name="email"
				/>
				<label htmlFor="login_password">Password</label>
				<input
					value={loginForm.password}
					onChange={onChange}
					id="login_password"
					type="password"
					name="password"
				/>
				<button>Submit</button>
			</form>
		</div>
	);
};
