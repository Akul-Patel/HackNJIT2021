
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SearchPage from './components/SearchPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Routes>
          <Route path="/search" element={<SearchPage/>}>
            
          </Route>
          <Route path="/" element={<Home/>}>
            
          </Route>

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
