import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Error404 from './components/Error404';

function App() {
  return (
    <>
      <Nav/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/">
          <Error404/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
