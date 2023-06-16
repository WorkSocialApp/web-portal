import React, { useState, useEffect } from 'react';
import styles from './SelectedCompany.module.scss';

const companies = [
	{ name: 'Clover', color: 'green' },
	{ name: 'Fiserv', color: 'orange' },
];

export const SelectedCompany = ({ selectCompany }) => {
	return (
		<div className={styles.wrapper}>
			<div>
				<h1 className={styles.select_company}>Select Your Company</h1>
				<div className={styles.companies_container}>
					{companies.map((company, idx) => {
						return (
							<div
								key={idx}
								className={styles.company}
								style={{
									color: company.color,
									'--companyColor': company.color,
								}}
								onClick={() => selectCompany(company.name)}
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
