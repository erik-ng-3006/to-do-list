import React from 'react';
import styles from './ToDoList.module.css';
const ToDoList = () => {
	return (
		<ul className={styles['list-items']}>
			<li>
				<input type='checkbox'></input>
				<span className={styles.checkmark}></span>
				<label>Do coding challenges</label>
			</li>
			<li>
				<input type='checkbox'></input>
				<span className={styles.checkmark}></span>

				<label>Do coding challenges</label>
			</li>
			<li>
				<input type='checkbox'></input>
				<span className={styles.checkmark}></span>
				<label>Do coding challenges</label>
			</li>
		</ul>
	);
};

export default ToDoList;
