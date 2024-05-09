import logo from '../assets/Holberton-Logo.jpg';
import './App.css';
import {getFullYear, getFooterCopy} from '../utils/utils';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img className='App-logo' src={logo} alt='logo' />
				<h1>School dashboard</h1>
			</header>
			<div className='App-body'>
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
			<footer className='App-footer'>
				<p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
				</p>
			</footer>
		</div>
	);
}

export default App;
