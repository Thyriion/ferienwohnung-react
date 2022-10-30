import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Wohnung1 from './Pages/Wohnung1';
import Wohnung2 from './Pages/Wohnung2';
import Anfahrt from './Pages/Anfahrt';
import Preise from './Pages/Preise';
import Freizeit from './Pages/Freizeit';
import Gaestebuch from './Pages/Gaestebuch';
import Kontakt from './Pages/Kontakt';

export default function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Wohnung1" element={<Wohnung1 />} />
                <Route path="/Wohnung2" element={<Wohnung2 />} />
                <Route path="/Anfahrt" element={<Anfahrt />} />
                <Route path="/Preise" element={<Preise />} />
                <Route path="/Freizeit" element={<Freizeit />} />
                <Route path="/Gaestebuch" element={<Gaestebuch />} />
                <Route path="/Kontakt" element={<Kontakt />} />
            </Routes>
        </main>
    );
}
