import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BottomNav.module.scss';

export const BottomNav = () => {
	return (
		<div className={styles.nav_container}>
			<h4>
				Proudly built by Engineers @{' '}
				<Link to="https://www.clover.com">Clover</Link>
			</h4>
		</div>
	);
};
