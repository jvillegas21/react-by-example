import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <HelloWorld name="Joseph" />,
  document.getElementById('root')
);
registerServiceWorker();
