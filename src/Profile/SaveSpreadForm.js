import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TarotApi from '../api/api';
import UserContext from '../Auth/UserContext';

function SaveSpreadForm() {
	const today = new Date().toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'short',
		year: 'numeric'
	});

	const history = useNavigate();

	const { currentUser } = useContext(UserContext);
	const [ formData, setFormData ] = useState({
		timedate: today,
		title: '',
		spread: '',
		comments: '',
		username: currentUser.username
	});
	// const [ formErrors, setFormErrors ] = useState([]);

	/** on form submit:
	   * - attempt save to backend & report any errors
	   * - if successful
	   *   - clear previous error messages and password
	   *   - show save-confirmed message
	   *   - set current user info throughout the site
	   */

	async function handleSubmit(evt) {
		evt.preventDefault();

		let spreadData = {
			timedate: today,
			title: formData.title,
			spread: formData.spread,
			comments: formData.comments,
			username: currentUser.username
		};

		let username = formData.username;
		let newSpread;

		try {
			newSpread = await TarotApi.newSpread(username, spreadData);
		} catch (errors) {
			console.debug(errors);
			return;
		}

		setFormData((f) => ({ ...f }));
		history('/profile');

		// // trigger reloading of user information throughout the site
	}

	/** Handle form data changing */
	function handleChange(evt) {
		const { name, value } = evt.target;
		setFormData((f) => ({
			...f,
			[name]: value
		}));
	}

	return (
		<div className='col-md-6 col-lg-4 offset-md-3 offset-lg-4'>
			<h3>Save This Spread</h3>
			<div className='card'>
				<div className='card-body'>
					<form>
						<div className='form-group'>
							<label>Title</label>
							<input
								name='title'
								className='form-control'
								value={formData.title}
								onChange={handleChange}
							/>
						</div>
						<div className='form-group'>
							<label>Cards Drawn</label>
							<input
								name='spread'
								className='form-control'
								value={formData.spread}
								onChange={handleChange}
							/>
						</div>
						<div className='form-group'>
							<label>Comments</label>
							<input
								type='textarea'
								name='comments'
								className='form-control'
								value={formData.comments}
								onChange={handleChange}
							/>
						</div>
						<p>{today}</p>
						<p>{currentUser.username}</p>
						{/* {formErrors.length ? <Alert type='danger' messages={formErrors} /> : null}

						{saveConfirmed ? <Alert type='success' messages={[ 'Updated successfully.' ]} /> : null} */}

						<button className='btn btn-primary btn-block mt-4' onClick={handleSubmit}>
							Save Changes
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default SaveSpreadForm;
