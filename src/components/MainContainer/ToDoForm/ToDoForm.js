import React from 'react';
import styles from './ToDoForm.module.css';
const ToDoForm = () => {
	return (
		<form className={styles['form-control']}>
			<input placeholder='add details'></input>
			<button type='submit'>Add</button>
		</form>
	);
};

export default ToDoForm;
