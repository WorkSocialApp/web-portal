import React from 'react';
import styles from './Dashboard.module.scss';

export const Dashboard = ({ logOut }) => {
	return (
		<div>
			<h1>Dashboard</h1>
			<button onClick={logOut}>Log Out</button>
		</div>
	);
};
