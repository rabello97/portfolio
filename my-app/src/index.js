import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Contents from './components/Contents';


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Contents/>
  </React.StrictMode>,
  document.getElementById('root')
);

