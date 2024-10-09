import React from 'react';
import logo from '../assets/Holberton-Logo.jpg';
import { StyleSheet, css } from "aphrodite";


// Aphrodite
const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    color: "#e60505",
  },
  img: {
    width: "40%",
    maxWidth: "400px",
  },
});

// React Component
const Header = () => (
	<header className={css(styles.header)}>
		<img className={css(styles.img)} src={logo} alt='logo' />
		<h1>School dashboard</h1>
	</header>
);

export default Header;
