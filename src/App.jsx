import React, { useEffect } from 'react'
import './styles/global.css'
import 'aos/dist/aos.css';

import { init, refresh }  from 'aos'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './routes/Main'
import Tos from './routes/Tos'
import Privacy from './routes/Privacy'
import NotFound from './routes/NotFound'
import Recruit from './routes/Recruit'

const App = () => {
    useEffect(() => {
        init()
        refresh()
    }, [])

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = '/' component = {Main} />
                <Route exact path = '/recruit' component = {Recruit} />
                <Route exact path = '/tos' component = {Tos} />
                <Route exact path = '/privacy' component = {Privacy} />
                <Route component = {NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default App