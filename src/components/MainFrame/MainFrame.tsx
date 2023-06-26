import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiURL } from '../../constants/apiURL';
import { TopNav } from '../TopNav/TopNav';
import { Dashboard } from '../Dashboard/Dashboard';
import { ToAuthenticate } from '../ToAuthenticate/ToAuthenticate';
import { BottomNav } from '../BottomNav/BottomNav';
import styles from './MainFrame.module.scss';

const initialUserObj = {
	user: {},
	isLoggedIn: false,
};

export const MainFrame = () => {
	const [user, setUser] = useState(initialUserObj);
	console.log(user);

	const setIsLoggedIn = (booleanResult) => {
		setUser((prevUser) => ({ ...prevUser, isLoggedIn: booleanResult }));
	};

	const setUserData = (userData) => {
		setUser((prevUser) => ({ ...prevUser, user: userData }));
	};

	const isAuthenticated = async () => {
		// Retrieve token from local storage
		const token = localStorage.getItem('token');
		// Set the Authorization header for Axios requests
		axios.defaults.headers.common['Authorization'] = token;

		await axios
			.post(`${apiURL!}/api/auth/isAuthed`)
			.then((data) => {
				console.log(data);
				setIsLoggedIn(true);
				console.log(data.data.user);
				setUserData(data.data.user);
			})
			.catch((err) => {
				localStorage.removeItem('token');
				console.log(err);
			});
	};

	const logOut = () => {
		localStorage.removeItem('token');
		setUser(initialUserObj);
	};

	useEffect(() => {
		isAuthenticated();
	}, [user.user && user.isLoggedIn]);

	return (
		<div className={styles.outer_frame}>
			<div className={styles.top_nav_frame}>
				<TopNav />
			</div>
			<div className={styles.centered_frame}>
				{user.isLoggedIn ? (
					<Dashboard logOut={logOut} />
				) : (
					<ToAuthenticate setIsLoggedIn={setIsLoggedIn} />
				)}
			</div>
			<div className={styles.bottom_frame}>
				<BottomNav />
			</div>
		</div>
	);
};
