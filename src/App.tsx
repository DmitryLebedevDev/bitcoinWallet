import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom'

import { Routes } from './routes';
import './models/init';
import './App.css';

function App() {
  return (
    <Routes/>
  );
}

const AppWidthHoc:FC = () => {
  return (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )
}

export default AppWidthHoc;
