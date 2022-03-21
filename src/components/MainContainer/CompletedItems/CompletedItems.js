import React from 'react';
import CheckedInput from '../../UI/CheckedInput';
import styles from './CompletedItems.module.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteButton from './DeleteButton/DeleteButton';

const CompletedItems = ({ toDos, toggleTodo, setToDos }) => {
	const listItem = toDos
		.filter((todo) => todo.complete === true)
		.map((todo) => {
			return (
				<div className={styles['list-item']} key={todo.id}>
					<CheckedInput
						id={todo.id}
						label={todo.name}
						complete={todo.complete}
						toggleTodo={toggleTodo}
					/>
					<DeleteOutlineIcon
						className={styles.icon}
						onClick={() => {
							console.log('clicked');
							setToDos((prevToDos) => {
								const newToDos = prevToDos.filter(
									(todoItem) => todoItem.id !== todo.id
								);
								return newToDos;
							});
						}}
					/>
				</div>
			);
		});

	const noTasksFound = (
		<div className={styles['no-tasks']}>No completed tasks</div>
	);
	return (
		<ul className={styles['list-items']}>
			{listItem.length === 0 ? noTasksFound : listItem}
			<DeleteButton className={styles.btn} setToDos={setToDos} />
		</ul>
	);
};

export default CompletedItems;
