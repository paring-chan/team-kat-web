import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './routes/Main'
import NotFound from './routes/NotFound'

import NavBar from './components/Navbar'

const App = () => (
    <BrowserRouter>
        <NavBar />
        <Switch>
            <Route exact path = '/' component = {Main} />
            <Route component = {NotFound} />
        </Switch>
    </BrowserRouter>
)

export default App;
