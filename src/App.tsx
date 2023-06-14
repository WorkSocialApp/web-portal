import React from 'react';
import { MainFrame } from './components/MainFrame/MainFrame';
import styles from './styles/_globals.module.scss';

export default function App() {
	return (
		<div className={styles.app_container}>
			<MainFrame />
		</div>
	);
}
