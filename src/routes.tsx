import React from 'react'
import { Switch, Route } from 'react-router'
import { Home } from './pages/home/Home'

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home}/>
    </Switch>
  )
}
