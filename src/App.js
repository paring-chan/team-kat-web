import React, { useEffect } from 'react'
import { init, refresh } from 'aos';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
    useEffect(() => {
        init();
        refresh();
    }, [])

    return (
        <BrowserRouter basename = {process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path = '/' component = {Main} />
                <Route path = '/tos' component = {Tos} />
                <Route path = '/privacy' component = {Privacy} />
                <Route component = {NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
