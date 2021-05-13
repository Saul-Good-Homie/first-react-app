import React from 'react';
import Overview from './components/Overview';
//import taskData from './components/TaskList';

function App() {
	const taskData = [
		{
			id: '1',
			task: 'Rock',
		},
		{
			id: '2',
			task: 'Paper',
		},
		{ id: '3', task: 'Scissors' },
	];

	const addTask = () => {
		console.log('hello');
	};

	const taskComponents = taskData.map((task) => {
		return <Overview key={task.id} task={task.task} />;
	});

	return (
		<div>
			<form>
				<input id="newTask" type="text"></input>
				<button type="button" onClick={addTask}>
					Submit!
				</button>
			</form>
			{taskComponents}
		</div>
	);
}

export default App;
