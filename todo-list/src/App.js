import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Tani and Kim!
        </p>
        <a
          className="App-link"
          href="https://github.com/MultiverseBackendProject/todolist"
          target="_blank"
          rel="noopener noreferrer"
        >
          Our Repo
        </a>
      </header>
    </div>
  );
}

export default App;
