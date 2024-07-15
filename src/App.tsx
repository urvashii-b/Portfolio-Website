import React from 'react';
import Sidebar from '../@/components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="container flex">
      <Sidebar />
      <main className="main-content flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;