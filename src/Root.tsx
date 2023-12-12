import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './screens/components/Header';

function Root() {
  return (
    <div>
      <Header />
      <Outlet />
      </div>
  );
}

export default Root;
