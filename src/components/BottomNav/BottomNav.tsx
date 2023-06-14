import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BottomNav.module.scss';

export const BottomNav = () => {
	return (
		<div className={styles.nav_container}>
			<h4>
				Proudly built by Engineers @{' '}
				<Link to="https://www.clover.com" className={styles.clover}>
					Clover
				</Link>{' '}
				/{' '}
				<Link to="https://www.fiserv.com" className={styles.fiserv}>
					Fiserv
				</Link>
			</h4>
		</div>
	);
};
