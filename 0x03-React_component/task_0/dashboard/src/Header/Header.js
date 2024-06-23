import React from 'react';
import logo from '../assets/Holberton-Logo.jpg';
import './Header.css';

const Header = () => (
	<header className='header'>
		<img className='App-logo' src={logo} alt='logo' />
		<h1>School dashboard</h1>
	</header>
);

export default Header;
