import React, { useState, useEffect } from 'react';
import { LoginOrSignup } from './LoginOrSignup/LoginOrSignup';
import { SelectedCompany } from './SelectedCompany/SelectedCompany';
import styles from './ToAuthenticate.module.scss';

export const ToAuthenticate = ({ setIsLoggedIn }) => {
	const [companySelected, setCompanySelected] = useState('');

	const selectCompany = (name) => {
		setCompanySelected(name);
	};

	const removeCompany = (): void => {
		setCompanySelected('');
	};

	return (
		<div className={styles.to_authenticate_container}>
			{companySelected ? (
				<LoginOrSignup
					company={companySelected}
					removeCompany={removeCompany}
					setIsLoggedIn={setIsLoggedIn}
				/>
			) : (
				<SelectedCompany selectCompany={selectCompany} />
			)}
		</div>
	);
};
