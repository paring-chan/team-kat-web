import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './style/global.css'

import Main from './routes/Main'
import NotFound from './routes/NotFound'

import NavBar from './components/Navbar'
import Footer from './components/Footer'

const App = () => (
    <BrowserRouter basename = {process.env.PUBLIC_URL}>
        <NavBar />
        <Switch>
            <Route exact path = '/' component = {Main} />
            <Route component = {NotFound} />
        </Switch>
        <Footer />
    </BrowserRouter>
)

export default App;
