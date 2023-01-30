import React, { useContext, useEffect, useState } from 'react';
import TarotApi from '../api/api';
import Table from 'react-bootstrap/Table';
import './Profile.css';
import UserContext from '../Auth/UserContext';
import { Link } from 'react-router-dom';

const editIcon = require('../edit.png');

const Profile = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);
	const [ spreads, setSpreads ] = useState();

	useEffect(function getSpreadsOnMount() {
		search();
	}, []);

	async function search(username) {
		const currentUsername = currentUser.username;
		let spreads = await TarotApi.getSpreads(currentUsername);
		setSpreads(spreads);
	}

	if (!spreads) return <p>Loading...</p>;

	return (
		<div>
			<h1 className='Meanings-Head'>Your Profile and Saved Spreads</h1>

			<Table responsive striped bordered hover size='sm'>
				<thead>
					<tr>
						<th>Username</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Edit</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{currentUser.username}</td>
						<td>{currentUser.firstName}</td>
						<td>{currentUser.lastName}</td>
						<td>{currentUser.email}</td>
						<td>
							<Link to='/edit'>
								<img src={editIcon} width='20px' />
							</Link>
						</td>
					</tr>
				</tbody>
			</Table>
			<p className='Profile-P'>Your Saved Spreads:</p>
			<Table responsive striped bordered hover size='sm'>
				<thead>
					<tr>
						<th>Date</th>
						<th>Title</th>
						<th>Spread</th>
						<th>Comments</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{spreads.map((spread, key) => {
						return (
							<React.Fragment>
								<tr>
									<td>{spread.timedate}</td>

									<td>{spread.title}</td>
									<td>{spread.spread}</td>
									<td>{spread.comments}</td>
									<td>X</td>
								</tr>
							</React.Fragment>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};
export default Profile;
