import React from 'react';
import 'Login.css';

const Login = () => (
	<>
		<div className='login'>
			<p>Login to access the full dashboard</p>
			<label htmlFor='email'>Email: </label>
			<input
				type='email'
				name='email'
				id='email'
				placeholder='Enter your Email'
			/>
			{'\t'}
			<label htmlFor='password'>password: </label>
			<input
				type='password'
				name='password'
				id='password'
				placeholder='Enter your Password'
			/>
			{'\t'}
			<button>ok</button>
		</div>
	</>
);

export default Login;