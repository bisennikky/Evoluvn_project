import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Projects from './pages/Projects.jsx';
import Background from './pages/Background.jsx';
import Setting from './pages/Setting.jsx';

const App = () => {
  return (
    <div>
      <div className='top_main_heading'>
            <h1>Portfolio</h1>
        </div>
    <BrowserRouter>
      <Sidebar>
        <Routes>
          {/* <Route path="/" element={<Dashboard />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Background" element={<Background />} />
          <Route path="/Setting" element={<Setting />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
    </div>
  );
};

export default App;