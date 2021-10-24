import { useSelector, useDispatch } from 'react-redux';

import { setToken } from './store/loginReducer';
import logo from './logo.svg';
import './App.css';

function App() {
  const token = useSelector((state) => state.login.token);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
