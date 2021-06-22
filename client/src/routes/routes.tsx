import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { LoginPage, SignupPage, LoggedOutPage, DashboardPage } from '../pages'

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/dashboard">
        <DashboardPage />
      </Route>
      <Route path="/loggedOut">
        <LoggedOutPage />
      </Route>
      <Route path="/signup">
        <SignupPage />
      </Route>
      <Route path="/">
        <LoginPage />
      </Route>
    </Switch>
  )
}

export default Routes
