import React from 'react';
import { TopNav } from '../TopNav/TopNav';
import styles from './MainFrame.module.scss';

export const MainFrame = () => {
	return (
		<div className={styles.outer_frame}>
			<div className={styles.top_nav_frame}>
				<TopNav />
			</div>
			<div className={styles.centered_frame}></div>
			<div className={styles.bottom_frame}></div>
		</div>
	);
};
