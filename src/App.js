import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Container customClass='min_height'>
        <Routes>
          <Route index element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path='company' element={<Company />} />
          <Route path='contact' element={<Contact />} />
          <Route path='newproject' element={<NewProject />} />
        </Routes>
      </Container>

      <Footer />
    </Router>


  );
}

export default App;
