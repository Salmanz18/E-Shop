import React from 'react';
import './App.css';

import HomePage from './pages/HomePage/HomePage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/ShopPage/ShopPage';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
