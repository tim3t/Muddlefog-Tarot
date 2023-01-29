import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import './Profile.css';
import UserContext from '../Auth/UserContext';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';
const editIcon = require('../edit.png');

const Profile = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);
	console.debug('Profile', currentUser);
	return (
		<div>
			<h1 className='Meanings-Head'>Your Profile and Saved Spreads</h1>
			<p className='Meanings-P'>Explanation Paragraph</p>
			<Table striped bordered hover>
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
			<p className='Meanings-P'>Explanation Paragraph for Spreads Chart</p>
		</div>
	);
};
export default Profile;
