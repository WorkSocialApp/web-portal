import React, { useState, useEffect } from 'react';
import styles from './LoginOrSignup.module.scss';
import { BackButton } from './BackButton';

export const LoginOrSignup = ({ company, removeCompany }) => {
	return (
		<div className={styles.login_signup_container}>
			<div className={styles.nav} onClick={() => removeCompany()}>
				<BackButton />
			</div>
			<div className={styles.wrapper}>
				<h1>Hello {company} adventurer!</h1>
				<div>I'm Logging in...</div>
				<div>I'm Signing Up...</div>
			</div>
		</div>
	);
};
