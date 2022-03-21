import React, { useState, useEffect } from 'react';
import MainTitle from './MainTitle/MainTitle';
import ToDoForm from './ToDoForm/ToDoForm';
import ToDoList from './ToDoList/ToDoList';
import CompletedItems from './CompletedItems/CompletedItems';
import styles from './MainContainer.module.css';

const MainContainer = () => {
	const [toDos, setToDos] = useState([
		{
			id: 1,
			name: 'Do Something',
			complete: true,
		},
		{
			id: 2,
			name: 'Do Something else',
			complete: false,
		},
		{
			id: 3,
			name: 'Do nothing',
			complete: false,
		},
	]);
	const [activeFilter, setActiveFilter] = useState(false);
	const [shownCompleted, setShownCompleted] = useState(false);

	useEffect(() => {
		const initialTodo = JSON.parse(localStorage.getItem('toDos'));
		if (initialTodo) setToDos(initialTodo);
	}, []);

	useEffect(() => {
		localStorage.setItem('toDos', JSON.stringify(toDos));
	}, [toDos]);

	const toggleTodo = (id) => {
		const newToDos = [...toDos];
		const todo = newToDos.find((todo) => todo.id === id);
		todo.complete = !todo.complete;
		setToDos(newToDos);
	};

	let listItems;

	if (!shownCompleted) {
		listItems = (
			<>
				<ToDoForm onSetToDos={setToDos} />
				<ToDoList
					toDos={toDos}
					toggleTodo={toggleTodo}
					activeFilter={activeFilter}
				/>
			</>
		);
	} else {
		listItems = (
			<CompletedItems
				toDos={toDos}
				toggleTodo={toggleTodo}
				setToDos={setToDos}
			/>
		);
	}

	return (
		<main role='main' className={styles.main}>
			<MainTitle
				onSetActiveFilter={setActiveFilter}
				setShownCompleted={setShownCompleted}
			/>
			{listItems}
		</main>
	);
};

export default MainContainer;
