import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';

export default function App() {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}
