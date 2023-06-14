import React, { useState, useEffect } from 'react';
import styles from './LoginOrSignup.module.scss';

export const LoginOrSignup = ({ company }) => {
	return (
		<div className={styles.login_signup_container}>
			<h1>Hello {company} adventurer!</h1>
			<div>I'm Logging in...</div>
			<div>I'm Signing Up...</div>
		</div>
	);
};
