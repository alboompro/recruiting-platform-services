import React from 'react'
import Signup from './components/signup'
import Products from './components/products'
import Complements from './components/complements'
import Final from './components/final'
import { Container } from './styles'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export default () => (
  <Container>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Signup}/>
        <Route path="/products" component={Products}/>
        <Route path="/complements" component={Complements}/>
        <Route path="/final" component={Final}/>
      </Switch>
    </BrowserRouter>
  </Container>
);