import logo from "./Holberton-Logo.jpg";
import './App.css';
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
