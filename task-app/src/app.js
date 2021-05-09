import React from 'react';
import Overview from './components/Overview';

function App() {
	return (
		<div>
			<form>
				<input type="text"></input>
				<button type="button">Submit!</button>
			</form>
			<Overview />
		</div>
	);
}

export default App;
