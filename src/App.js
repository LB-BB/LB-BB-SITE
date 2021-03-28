<<<<<<< HEAD
import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Oh hello</h1>
    </div>
=======
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
>>>>>>> 163f81957ac5e32eb01a114a759d3ac4a396e0a9
  );
}

export default App;
