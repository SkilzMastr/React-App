import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//^^^^^^^^^^^^^^^^^^^
//This imports the <App /> tag seen below.



//This function renders onto the webpage.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


