import React, { useState, useEffect } from 'react';
import { TopNav } from '../TopNav/TopNav';
import { Dashboard } from '../Dashboard/Dashboard';
import { ToAuthenticate } from '../ToAuthenticate/ToAuthenticate';
import { BottomNav } from '../BottomNav/BottomNav';
import styles from './MainFrame.module.scss';

export const MainFrame = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	return (
		<div className={styles.outer_frame}>
			<div className={styles.top_nav_frame}>
				<TopNav />
			</div>
			<div className={styles.centered_frame}>
				{isLoggedIn ? <Dashboard /> : <ToAuthenticate />}
			</div>
			<div className={styles.bottom_frame}>
				<BottomNav />
			</div>
		</div>
	);
};
