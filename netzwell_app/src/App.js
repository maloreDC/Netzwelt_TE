import './App.css';
import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import CounterExample from './components/CounterExample';
import Home from './components/Home';
import Nav from './components/Nav';
import ProtectedRoute from './ProtectedRoute';
import Menu from './components/Menu';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const menu = [
  {
    title: 'Item 1',
    children: [
      {
        title: 'Item 1.1',
        children: [
          {
            title: 'Item 1.1.1',
          },
        ],
      },
      {
        title: 'Item 1.2',
      },
    ],
  },
  {
    title: 'Item 2',
    children: [
      {
        title: 'Item 2.1',
      },
    ],
  },
];

function App() {


  return (
    <div className='App'>

      <Router>
        <Nav />
        <Menu items={menu} />

        <Switch>
          <ProtectedRoute exact path='/' component={Home} />
          <Route exact path='/counter' component={CounterExample} />
          <Route exact path='/account/login' component={LoginForm} />
          <Route exact path="*" component={() => "404 NOT FOUND"} />

        </Switch>
      </Router>

    </div>


  );
}

export default App;
