import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Contents from './components/Contents';
import Footer from './components/Footer';


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Contents/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

