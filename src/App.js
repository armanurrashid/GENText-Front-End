import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import UploadFile from './pages/UploadFile.jsx';
import Notifications from './pages/Notifications.jsx';
import History from './pages/History.jsx';
import Profile from './pages/Profile.jsx';
import Header from './components/Header/Header.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <Header></Header>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload" element={<UploadFile />} />
          <Route path="/history" element={<History />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/productList" element={<ProductList />} /> */}
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;