import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Resume from './Pages/Resume/Resume';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
      <Routes>
      <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          </Routes>
      </Layout>
    </Router>
  );
}

export default App;
