import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon'
import App from './containers/App.jsx';
import './assets/stylesheets/index.scss';

ReactDOM.render(
    <div>
        <Favicon url='https://raw.githubusercontent.com/agreloe/DeRigo-Web/master/favicon.ico' />
        <App />
    </div>,
    document.getElementById('root')
);
