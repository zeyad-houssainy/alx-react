import React, { createContext } from "react";

export const user = {
  email: "",
  password: "",
  isLoggedIn: false,
};

export const logOut = () => {
    user.isLoggedIn= false
    console.log("You're logged out..")
}


const AppContext = createContext({
  user,
  logOut,
});

export default AppContext;