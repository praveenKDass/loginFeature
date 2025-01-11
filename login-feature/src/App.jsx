import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login/>} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
