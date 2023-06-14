import React from 'react';
import styles from './BottomNav.module.scss';

export const BottomNav = () => {
	return (
		<div className={styles.nav_container}>
			<h4>
				Proudly built by Engineers @{' '}
				<a href="https://www.clover.com">Clover</a>
			</h4>
		</div>
	);
};
