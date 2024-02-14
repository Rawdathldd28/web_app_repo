import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
//import Home from './screen/home.js';
// import Projets from './screens/Projets';
// import Rocket from './screens/Rocket';
// import Hub from './screens/Hub';

function App() {
  return (
    <>
      <Navbar />
      {/* <Router>
          <Routes>
            <Route path="/home" element={< Home />} />
          </Routes>
      </Router> */}
    </>
  );
};

export default App;