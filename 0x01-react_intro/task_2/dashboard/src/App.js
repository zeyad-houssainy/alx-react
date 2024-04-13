import logo from "./Holberton-Logo.jpg";
import './App.css';
import { getFullYear, getFooterCopy } from "./utils";
import { Button } from "bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" placeholder="Enter your Email" />
        <label htmlFor="password">password: </label>
        <input type="password" name="password" id="password" placeholder="Enter your Password" />
        <button>ok</button>
        {/* <form>
        </form> */}
      </body>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
