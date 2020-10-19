import React from 'react';
import { Switch, Route } from 'react-router-dom'; // Switch provides more control over the routing
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import './App.css';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route exact={true} path='/shop' component={ShopPage} />
        <Route exact={true} path='/sign-in' component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
