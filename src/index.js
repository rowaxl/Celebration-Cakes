import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core'
import theme from './theme'

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

import './styles/global.css'

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/products" component={Products} />
            <Route path="/product" component={ProductDetail} />
          </Switch>
        </Router>
      </ThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
