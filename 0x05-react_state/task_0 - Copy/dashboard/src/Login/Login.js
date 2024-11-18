import React from 'react';
import { StyleSheet, css} from "aphrodite"


//aphrodite
const styles = StyleSheet.create({
  login: {
    height: "48%",
  },
  button: {
    backgroundColor: "#f5f5f5ab",
    border: "2px solid #d49606",
    borderRadius: 4,
    color: "#000",
    cursor: "pointer",
    fontSize: 15,
    fontWeight: "bold",
    padding: "5px 5px",
    textAlign: "center",
    width: "80px",
  },
});

// React Component
class Login extends React.Component {
	render() {
			<>
        <div className={css(styles.login)}>
          <p>Login to access the full dashboard</p>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
          />
          {"\t"}
          <br />
          <label htmlFor="password">password: </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your Password"
          />
          <br />
          <button className={css(styles.button)}>Login</button>
        </div>
      </>;

	}
}


export default Login;
