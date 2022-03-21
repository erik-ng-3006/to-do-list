import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import styles from './DeleteButton.module.css';

const DeleteButton = (props) => {
	const onClickHandler = () => {
		props.setToDos((prevToDos) => {
			const newToDos = prevToDos.filter((todo) => todo.complete !== true);
			return newToDos;
		});
	};

	const classes = `${props.className} ${styles.btn}`;
	return (
		<button className={classes} onClick={onClickHandler}>
			<DeleteOutlineIcon className={styles.icon} />
			delete all
		</button>
	);
};

export default DeleteButton;
