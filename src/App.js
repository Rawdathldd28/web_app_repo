import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
// import ContactForm from './screens/ContactForm';
// import Projets from './screens/Projets';
// import Rocket from './screens/Rocket';
// import Hub from './screens/Hub';

function App() {
  return (
    <>
      <Navbar />
      {/* <Router>
          <Routes>
            <Route path="/" element={<Rocket />} />
          </Routes>
      </Router> */}
    </>
  );
};

export default App;