import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { unregister } from './serviceWorker';

import './style/global.css'
import 'aos/dist/aos.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

unregister()
