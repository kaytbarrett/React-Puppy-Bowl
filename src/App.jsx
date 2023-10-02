import React, { useState } from 'react';
import './App.css';
import Players from './Players';
import SinglePlayer from './SinglePlayer';
import { Routes, Route } from "react-router-dom";


function App() {


  return (
    <Routes>
         <Route path="/" element={<Players />} />
      <Route path="/player/:id" element={<SinglePlayer />} />
    </Routes>

  )
};

export default App;
