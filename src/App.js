import React from 'react';
import './App.css';

import HomePage from './pages/HomePage/HomePage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import SignInSignUpPage from './pages/SignInSignUpPage/SignInSignUpPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={ShopPage} />
        <Route path='/shop/signin' component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
