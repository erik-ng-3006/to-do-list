import React, { useState } from 'react';
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

	const [style, setStyle] = useState('');

	return (
		<div className={styles['main-title']}>
			<h2 onClick={showAllList} className={style}>
				All
			</h2>
			<h2 onClick={showActiveClickHandler} className={style}>
				Active
			</h2>
			<h2 onClick={showCompleted} className={style}>
				Completed
			</h2>
		</div>
	);
};

export default MainTitle;
