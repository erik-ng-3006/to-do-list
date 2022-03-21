import React, { useRef } from 'react';
import styles from './ToDoForm.module.css';
import { v4 as uuidv4 } from 'uuid';
const ToDoForm = (props) => {
	const inputRef = useRef(null);
	/* const inputChangeHandler = (e) => {
		setInputState(e.target.value);
	}; */
	const formSubmitHandler = (e) => {
		e.preventDefault();
		const name = inputRef.current.value;
		if (name === '') return;
		props.onSetToDos((prevState) => [
			...prevState,
			{ id: uuidv4(), name, complete: false },
		]);
		inputRef.current.value = null;
	};
	return (
		<form className={styles['form-control']} onSubmit={formSubmitHandler}>
			<input placeholder='add details' ref={inputRef}></input>
			<button type='submit'>Add</button>
		</form>
	);
};

export default ToDoForm;
