import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';

import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>HELLO WORLD</h1>
        <Navbar />
      </div>

      <Container customClass='min_height'>
        <Routes>
          <Route index element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path='company' element={<Company />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </Container>

      <p>Footer</p>
    </Router>


  );
}

export default App;
