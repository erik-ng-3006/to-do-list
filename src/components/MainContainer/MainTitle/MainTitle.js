import React from 'react';
import styles from './MainTitle.module.css';
const MainTitle = (props) => {
	const showActiveClickHandler = () => {
		props.onSetActiveFilter(true);
		props.setShownCompleted(false);
	};

	const showAllList = () => {
		props.onSetActiveFilter(false);
		props.setShownCompleted(false);
	};

	const showCompleted = () => {
		props.setShownCompleted(true);
	};

	return (
		<div className={styles['main-title']}>
			<h2 onClick={showAllList}>All</h2>
			<h2 onClick={showActiveClickHandler}>Active</h2>
			<h2 onClick={showCompleted}>Completed</h2>
		</div>
	);
};

export default MainTitle;
