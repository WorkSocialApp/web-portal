import React from 'react';
import styles from './ToAuthenticate.module.scss';

const companies = [
	{ name: 'Clover', color: 'green' },
	{ name: 'Fiserv', color: 'orange' },
];

export const ToAuthenticate = () => {
	return (
		<div className={styles.to_authenticate_container}>
			<div className={styles.wrapper}>
				<h1 className={styles.select_company}>Select Your Company</h1>
				<div className={styles.companies_container}>
					{companies.map((company, idx) => {
						return (
							<div
								key={idx}
								className={styles.company}
								style={{ backgroundColor: company.color }}
							>
								{company.name}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
