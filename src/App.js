import React from 'react';
import { Switch, Route } from 'react-router-dom'; // Switch provides more control over the routing
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route exact={true} path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
