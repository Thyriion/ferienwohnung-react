import logo from './logo.svg';
import './styles/main.css';
import Navbar from './components/Navbar';
import React from 'react';
import Preise from './pages/Preise';
import Wohnung from './pages/Wohnung';
import Wohnung2 from './pages/Wohnung2';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <React.Fragment>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Preise" element={<Preise />} />
                <Route path="/Wohnung" element={<Wohnung />} />
                <Route path="/Wohnung2" element={<Wohnung2 />} />
            </Routes>
        </React.Fragment>
    );
}

export default App;
