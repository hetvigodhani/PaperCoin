import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Route, Routes, useRoutes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import LogIn from './components/login';
import Eth from './components/eth';
import History from './components/history';
function App() {

  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LogIn/>} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/home/eth" element={<Eth/>}/>
      <Route path="/history" element={<History/>}/>
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
