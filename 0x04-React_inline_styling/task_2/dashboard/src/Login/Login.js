import React from 'react';
import { StyleSheet, css} from "aphrodite"


//aphrodite
const styles = StyleSheet.create({
	login: {
		height: '48%',
		border: "2px dashed green" //temp
	}
})

// React Component
const Login = () => (
	<>
		<div className={css(styles.login)}>
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
