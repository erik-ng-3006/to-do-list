import React from 'react';
import MainTitle from './MainTitle/MainTitle';
import ToDoForm from './ToDoForm/ToDoForm';
import ToDoList from './ToDoList/ToDoList';
import styles from './MainContainer.module.css';

const MainContainer = () => {
	return (
		<main role='main' className={styles.main}>
			<MainTitle />
			<ToDoForm />
			<ToDoList />
		</main>
	);
};

export default MainContainer;
