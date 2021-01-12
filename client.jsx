import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ManufacturersPage from './pages/Manufacturers'

render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ManufacturersPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
)
