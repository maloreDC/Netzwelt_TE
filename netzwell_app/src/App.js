import './App.css';
import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import CounterExample from './components/CounterExample';
import Home from './components/Home';
import Nav from './components/Nav';
import ProtectedRoute from './ProtectedRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios';

function App() {

  const [isAuth, setIsAuth] = useState(true)

  const [users, setPosts] = useState([])


  {/** 
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log(res)
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

 */}



  return (
    <div className='App'>

      {/** 
      <ul>
        {
          users.map(user => <li key={user.id}>
            {user.name}
          </li>
          )}
      </ul>
          */}



      <Router>
        <Nav />
        <Switch>
          <ProtectedRoute exact path='/' component={Home} isAuth={isAuth} />
          <Route exact path='/counter' component={CounterExample} />
          <Route exact path='/account/login' component={LoginForm} />
          <Route exact path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>

    </div>


  );
}

export default App;
