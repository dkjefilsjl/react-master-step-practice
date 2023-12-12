import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <div><Outlet /></div>
  );
}

export default Root;
