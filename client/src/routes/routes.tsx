import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {
  LoginPage,
  SignupPage,
  LoggedOutPage,
  DashboardPage,
  ProfilePage,
  MyMentorsPage,
  MyApprenticesPage,
  SearchMentorsPage,
} from '../pages'

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/dashboard">
        <DashboardPage />
      </Route>
      <Route path="/profile">
        <ProfilePage />
      </Route>
      <Route path="/my-mentors">
        <MyMentorsPage />
      </Route>
      <Route path="/my-apprentices">
        <MyApprenticesPage />
      </Route>
      <Route path="/search-mentors">
        <SearchMentorsPage />
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
