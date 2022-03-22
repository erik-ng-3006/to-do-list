import React from 'react';
import styles from './ToDoList.module.css';
import CheckedInput from '../../UI/CheckedInput';

const ToDoList = (props) => {
	let listItem;

	if (props.activeFilter) {
		listItem = props.toDos
			.filter((todo) => todo.complete !== true)
			.map((todo) => {
				return (
					<CheckedInput
						key={todo.id}
						id={todo.id}
						label={todo.name}
						complete={todo.complete}
						toggleTodo={props.toggleTodo}
					/>
				);
			});
	} else {
		listItem = props.toDos.map((todo) => {
			return (
				<CheckedInput
					key={todo.id}
					id={todo.id}
					label={todo.name}
					complete={todo.complete}
					toggleTodo={props.toggleTodo}
				/>
			);
		});
	}

	if (listItem.length === 0) {
		listItem = <div className={styles.center}>No todos</div>;
	}

	return <ul className={styles['list-items']}>{listItem}</ul>;
};

export default ToDoList;
