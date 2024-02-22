import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Gestion from './components/Gestion'
import Reservations from './components/Reservations'
import Nvbar from './components/Nvbar'

function App() {
  return (
    <>
      {/* <Nvbar /> */}
      {/* <Form /> */}
      {/* <Reservations /> */}
      {/* <Gestion /> */}
      <Router>
        <Routes>
          <Route path="/" element={< Navbar />} />
          <Route path="/Reservations" element={< Reservations />} />
          <Route path="/Form" element={< Form />} />
          <Route path="/Gestion" element={< Gestion />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;