import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ErrorPage from './pages/Error'
import CandiesPage from './pages/Candies'
import ManufacturersPage from './pages/Manufacturers'

render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ManufacturersPage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
)
