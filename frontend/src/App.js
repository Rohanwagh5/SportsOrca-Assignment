import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Match from './components/Matchlisting';
import Matachlisting from './components/Matchlisting';

function App() {



  
  return (
    <div className="App">
       <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/matches" element={<Matachlisting />} />

       </Routes>
    </div>
  );
}

export default App;
