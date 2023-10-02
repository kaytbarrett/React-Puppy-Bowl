import React, { useState } from 'react';
import './App.css';
import Players from './Players';
import SinglePlayer from './SinglePlayer';
import { Routes, Route, useParams, Link } from "react-router-dom";


function App() {
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);


  return (
    <Routes>
         <Route path="/" element={<Players setSelectedPlayerId={setSelectedPlayerId}/>} />
      <Route path="/player/:name" element={<SinglePlayer playerId={selectedPlayerId}/>} />
    </Routes>

  )
};

export default App;
