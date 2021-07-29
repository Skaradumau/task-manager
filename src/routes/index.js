import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { routes } from 'config/routes'
import Home from './Home/Home'
import NotFound from './NotFound/NotFound'

const Routes = () => (
  <Switch>
    <Route exact path={routes.root()} component={Home} />
    <Route path={routes.subtasks()} component={() => <duv>aaaaaaaaaa</duv>} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
