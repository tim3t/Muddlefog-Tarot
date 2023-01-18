import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SignupForm() {
	const history = useHistory();
	const [ formData, setFormData ] = useState({ username: '', password: '', firstName: '', lastName: '', email: '' });
	const [ formErrors, setFormErrors ] = useState([]);

	async function handleSubmit(e) {
		e.preventDefault();
		let result = await SignupForm(formData);
		if (result.success) {
			history.push('/home');
		}
		else {
			setFormErrors(result.errors);
		}
	}

	function handleChange(e) {
		const { name, value } = e.target;
		setFormData((data) => ({ ...data, [name]: value }));
	}

	return (
		<div className='SignupForm'>
			<h2>Sign Up</h2>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label>Username</label>
					<input name='username' className='form-control' value={formData.username} onChange={handleChange} />
				</div>
				<div className='form-group'>
					<label>Password</label>
					<input
						type='password'
						name='password'
						className='form-control'
						autoComplete='current-password'
						value={formData.password}
						onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<label>First name</label>
					<input
						name='firstName'
						className='form-control'
						value={formData.firstName}
						onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<label>Last name</label>
					<input name='lastName' className='form-control' value={formData.lastName} onChange={handleChange} />
				</div>
				<div className='form-group'>
					<label>Email</label>
					<input
						type='email'
						name='email'
						className='form-control'
						value={formData.email}
						onChange={handleChange}
					/>
				</div>
				<button type='submit' className='btn btn-primary' onSubmit={handleSubmit}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default SignupForm;
