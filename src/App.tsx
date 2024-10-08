import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Blogs from './Blog';
import './App.css';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  );
}

export default App;
