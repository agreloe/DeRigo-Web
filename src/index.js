import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.jsx';
import './assets/stylesheets/index.scss';


if (module.hot) {
    module.hot.accept()
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
