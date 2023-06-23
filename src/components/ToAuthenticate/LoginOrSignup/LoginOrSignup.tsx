import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './LoginOrSignup.module.scss';
import { apiURL } from '../../../constants/apiURL';
import { BackButton } from '../../BackButton/BackButton';
import { Login } from '../Login/Login';
import { Signup } from '../Signup/Signup';

const initialLoginFormObj = {
	email: '',
	password: '',
};

const initialSignupFormObj = {
	first_name: 'Aaron',
	last_name: 'Mendez',
	email: 'aaron@gmail.com',
	password: 'password',
	verifyPassword: 'password',
};

export const LoginOrSignup = ({ company, removeCompany, setIsLoggedIn }) => {
	const [signType, setSignType] = useState('');
	const [loginForm, setLoginForm] = useState(initialLoginFormObj);
	const [signupForm, setSignupForm] = useState(initialSignupFormObj);
	const [loginFormErrors, setLoginFormErrors] = useState('');
	const [signupFormErrors, setSignupFormErrors] = useState('');

	const sign = (type) => {
		setSignType(type);
	};

	const handleLoginChange = (e) => {
		const { name, value } = e.target;
		if (loginFormErrors) setLoginFormErrors('');
		setLoginForm({
			...loginForm,
			[name]: value,
		});
	};

	const handleSignupChange = (e) => {
		const { name, value } = e.target;
		if (signupFormErrors) setSignupFormErrors('');
		setSignupForm({ ...signupForm, [name]: value });
	};

	const submitLogin = (e) => {
		e.preventDefault();
		if (!loginForm.email || !loginForm.password) {
			setLoginFormErrors('Please enter all fields');
		} else {
			// do post here
			console.log(loginForm);
		}
	};

	const signupFetch = async () => {
		let body = {
			first_name: signupForm.first_name,
			last_name: signupForm.last_name,
			email: signupForm.email,
			password: signupForm.password,
		};
		await axios
			.post(`${apiURL!}/api/auth/signup`, body)
			.then((data) => {
				// Clear signup form
				// Navigate to /dashboard
				// setSignupForm(initialSignupFormObj);
				// setIsLoggedIn(true);
				console.log(data);
				const token = localStorage.setItem(
					'token',
					`Bearer ${data.data.token}`
				);
				setIsLoggedIn(true);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const submitSignup = (e) => {
		e.preventDefault();
		if (signupForm.password !== signupForm.verifyPassword) {
			setSignupFormErrors('Passwords must match');
		} else {
			if (
				!signupForm.first_name ||
				!signupForm.last_name ||
				!signupForm.email ||
				!signupForm.password ||
				!signupForm.verifyPassword
			) {
				setSignupFormErrors('Please enter all fields');
			} else {
				// do post here
				signupFetch();
				// console.log(signupForm);
			}
		}
	};

	return (
		<div className={styles.login_signup_container}>
			<div className={styles.nav} onClick={() => removeCompany()}>
				<BackButton />
			</div>
			<div className={styles.wrapper}>
				<h1>Hello {company} adventurer!</h1>
				<div className={styles.options}>
					<div className={styles.signin_options}>
						<div
							className={`
						${styles.signon_option}
						${signType === 'login' && styles.active}
					`}
							onClick={() => sign('login')}
						>
							I'm Logging in...
						</div>
						<div
							className={`
							${styles.signon_option}
							${signType === 'signup' && styles.active}
						`}
							onClick={() => sign('signup')}
						>
							I'm Signing Up...
						</div>
					</div>
				</div>
			</div>
			<div className={styles.form_wrapper}>
				{signType === 'login' && (
					<Login
						onChange={handleLoginChange}
						loginForm={loginForm}
						submitLogin={submitLogin}
						loginFormErrors={loginFormErrors}
					/>
				)}
				{signType === 'signup' && (
					<Signup
						onChange={handleSignupChange}
						signupForm={signupForm}
						submitSignup={submitSignup}
						signupFormErrors={signupFormErrors}
					/>
				)}
			</div>
		</div>
	);
};
