import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Мой первый проект на React.
        </p>
        <a
          className="App-link"
          href="https://kayori.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Начать
        </a>
      </header>
    </div>
  );
}

export default App;
