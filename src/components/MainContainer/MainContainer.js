import React from 'react';
import MainTitle from './MainTitle/MainTitle';
import ToDoForm from './ToDoForm/ToDoForm';
import ToDoList from './ToDoList/ToDoList';

const MainContainer = () => {
	return (
		<main role='main'>
			<MainTitle />
			<ToDoForm />
			<ToDoList />
		</main>
	);
};

export default MainContainer;
