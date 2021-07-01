import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SearchBar from './pages/SearchBar';
import Checkout from './pages/Checkout/index';
import New from './pages/New';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/SignIn" exact component={SignIn} />
        <Route path="/SignUp" exact component={SignUp} />
        <Route path="/searchProduct" component={SearchBar} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/new" component={New} />
      </Switch>
    </BrowserRouter>
  );
}
