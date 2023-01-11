import React from 'react';
import Card from './Card/Card';

import { BrowserRouter, Routes } from 'react-router-dom';

function Routes() {
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<Route exact path='/'>
					<Home />
				</Route>
			</BrowserRouter>
		</div>
	);
}
