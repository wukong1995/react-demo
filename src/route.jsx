import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Index from './main/Index';
import List from './main/List';


const MyRoute = () => (
  <Switch>
    <Route path="/index" component={Index} />
    <Route path="/list" component={List} />
  </Switch>
)

export default MyRoute
