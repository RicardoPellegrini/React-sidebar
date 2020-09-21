import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' exact component={Products} />
          <Route path='/reports' exact component={Reports} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
