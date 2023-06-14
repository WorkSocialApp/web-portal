import React, { useState, useEffect } from 'react';
import { LoginOrSignup } from './LoginOrSignup/LoginOrSignup';
import { SelectedCompany } from './SelectedCompany/SelectedCompany';
import styles from './ToAuthenticate.module.scss';

export const ToAuthenticate = () => {
	const [companySelected, setCompanySelected] = useState('');

	const selectCompany = (name) => {
		setCompanySelected(name);
	};

	return (
		<div className={styles.to_authenticate_container}>
			{companySelected ? (
				<LoginOrSignup company={companySelected} />
			) : (
				<SelectedCompany selectCompany={selectCompany} />
			)}
		</div>
	);
};
