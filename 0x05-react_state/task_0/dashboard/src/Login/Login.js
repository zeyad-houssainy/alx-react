import React, { useEffect, useState } from 'react';
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
  buttonDisabled: {
    backgroundColor: "#f5f5f5ab",
    border: "2px solid #d49606",
    borderRadius: 4,
    color: "#000",
    cursor: "not-allowed",
    fontSize: 15,
    fontWeight: "bold",
    padding: "5px 5px",
    textAlign: "center",
    width: "80px",
    opacity: 0.5, // 50% transparent
  },
});


// React Component
const Login = () => {
  
  // define variables
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);

  // Login button
  const handleLoginSubmit = (e) => {
    e.preventDefault()
    setIsLoggedIn(true)
    alert(`name is: ${email} and password is ${password}`); //temp
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (email !== "" && password !== "") {
      setEnableSubmit(true);
    } else {
      setEnableSubmit(false);
    }
  }, [email, password]);

  // Component
  return (
    <>
      <div className={css(styles.login)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
            value={email}
            onChange={handleChangeEmail}
            required
          />
          <br />
          <label htmlFor="password">password: </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your Password"
            value={password}
            onChange={handleChangePassword}
            required
          />
          <br />
          <input
            type="submit"
            className={css(
              enableSubmit ? styles.button : styles.buttonDisabled
            )}
            value="Login"
            disabled={!enableSubmit}
            onClick={setIsLoggedIn(true)}
          />
        </form>
      </div>
    </>
  );
};

export default Login;
