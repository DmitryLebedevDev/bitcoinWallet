import React, { FC, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'

import { updateUserBalanceFx } from './models/user';
import { Routes } from './routes';
import './models/init';
import './App.css';

function App() {
  useEffect(() => {
    updateUserBalanceFx(NaN)
  }, [])

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
