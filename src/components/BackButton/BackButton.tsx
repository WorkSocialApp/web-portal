import React from 'react';
import styles from './BackButton.module.scss';

export const BackButton = () => {
	return (
		<svg
			width="3rem"
			height="3rem"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			className={styles.button}
		>
			<title />

			<g id="Complete">
				<g id="arrow-left">
					<g>
						<polyline
							data-name="Right"
							fill="none"
							id="Right-2"
							points="7.6 7 2.5 12 7.6 17"
							stroke="#000000"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
						/>

						<line
							fill="none"
							stroke="#000000"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							x1="21.5"
							x2="4.8"
							y1="12"
							y2="12"
						/>
					</g>
				</g>
			</g>
		</svg>
	);
};
