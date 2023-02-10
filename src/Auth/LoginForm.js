import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../common/Alert';

/** Login form.
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls login function prop
 * - redirects to / route
 *
 * Routes -> LoginForm -> Alert
 * Routed as /login
 */

function LoginForm({ login }) {
	const history = useNavigate();
	const [ formData, setFormData ] = useState({
		username: '',
		password: ''
	});
	const [ formErrors, setFormErrors ] = useState([]);

	/** Handle form submit:
   *
   * Calls login func prop and, if successful, redirect to /.
   */

	async function handleSubmit(evt) {
		evt.preventDefault();
		let result = await login(formData);
		if (result.success) {
			history('/');
		}
		else {
			setFormErrors(result.errors);
		}
	}

	/** Update form data field */
	function handleChange(evt) {
		const { name, value } = evt.target;
		setFormData((l) => ({ ...l, [name]: value }));
	}

	return (
		<div className='LoginForm'>
			<div className='container col-md-6 offset-md-3 col-lg-4 offset-lg-4'>
				<h3 className='mb-3'>Log In</h3>

				<div className='card'>
					<div className='card-body'>
						<form onSubmit={handleSubmit}>
							<div className='form-group'>
								<label>Username</label>
								<input
									name='username'
									className='form-control'
									value={formData.username}
									onChange={handleChange}
									autoComplete='username'
									required
								/>
							</div>
							<div className='form-group'>
								<label>Password</label>
								<input
									type='password'
									name='password'
									className='form-control'
									value={formData.password}
									onChange={handleChange}
									autoComplete='current-password'
									required
								/>
							</div>

							<button className='btn btn-primary' onSubmit={handleSubmit}>
								Submit
							</button>
							{formErrors.length ? <Alert messages={formErrors} /> : null}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginForm;
