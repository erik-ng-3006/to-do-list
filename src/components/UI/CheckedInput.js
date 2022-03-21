import React from 'react';
import styles from './CheckedInput.module.css';

const CheckedInput = (props) => {
	const changeHandler = () => {
		props.toggleTodo(props.id);
	};

	return (
		<li className={styles['list-item']}>
			<label className={props.complete === true ? styles.checked : ''}>
				<input
					checked={props.complete}
					type='checkbox'
					onChange={changeHandler}
				></input>
				{props.label}
			</label>
		</li>
	);
};

export default CheckedInput;
