import React from 'react';
import CheckedInput from '../../UI/CheckedInput';
import styles from './CompletedItems.module.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteButton from './DeleteButton/DeleteButton';

const CompletedItems = ({ toDos, toggleTodo, setToDos }) => {
	return (
		<ul className={styles['list-items']}>
			{toDos
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
									setToDos((prevToDos) => {
										const newToDos = prevToDos.filter(
											(todoItem) =>
												todoItem.id === todo.id
										);
										return newToDos;
									});
								}}
							/>
						</div>
					);
				})}
			<DeleteButton className={styles.btn} setToDos={setToDos} />
		</ul>
	);
};

export default CompletedItems;
