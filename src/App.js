import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './style/global.css'
import 'aos/dist/aos.css'
import { init, refresh } from 'aos';

import Main from './routes/Main'
import Members from './routes/Members'
import NotFound from './routes/NotFound'

import Tos from './routes/Tos'
import Privacy from './routes/Privacy'

import NavBar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
    useEffect(() => {
        init();
        refresh();
    }, [])

    return (
        <BrowserRouter basename = {process.env.PUBLIC_URL}>
            <NavBar />
            <Switch>
                <Route exact path = '/' component = {Main} />
                <Route path = '/members' component = {Members} />
                <Route path = '/tos' component = {Tos} />
                <Route path = '/privacy' component = {Privacy} />
                <Route component = {NotFound} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default App;
