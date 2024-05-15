import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import './App.css';

const App = () => (
	// Class name app was not added
	<>
		<Notifications />
		<Header />
		<Login />
		<Footer />
	</>
);

export default App;

