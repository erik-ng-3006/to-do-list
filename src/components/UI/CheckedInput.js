import React from 'react';
import styles from './CheckedInput.module.css';

const CheckedInput = (props) => {
	return (
		<li>
			<input
				type='checkbox'
				id={props.id}
				checked={props.checkedHandle}
			></input>
			<label htmlFor={props.id}>{props.label}</label>
		</li>
	);
};

export default CheckedInput;
