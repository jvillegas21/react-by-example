import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './App';
import HelloWorldApp from './App';
import OneTimeClickLink from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <HelloWorldApp />,
  document.getElementById('root')
);
registerServiceWorker();
