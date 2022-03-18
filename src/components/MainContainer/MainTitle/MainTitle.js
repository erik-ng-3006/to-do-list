import React from 'react';
import styles from './MainTitle.module.css';
const MainTitle = () => {
	return (
		<div className={styles['main-title']}>
			<h2 className={styles.active}>All</h2>
			<h2>Active</h2>
			<h2>Completed</h2>
		</div>
	);
};

export default MainTitle;
