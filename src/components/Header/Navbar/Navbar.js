import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Startseite</Link>
                </li>
                <li>
                    <Link to="/Wohnung1">Wohnung 1</Link>
                </li>
                <li>
                    <Link to="/Wohnung2">Wohnung 2</Link>
                </li>
                <li>
                    <Link to="/Anfahrt">Anfahrt</Link>
                </li>
                <li>
                    <Link to="/Preise">Preise</Link>
                </li>
                <li>
                    <Link to="/Freizeit">Freizeit</Link>
                </li>
                <li>
                    <Link to="/Gaestebuch">Gästebuch</Link>
                </li>
                <li>
                    <Link to="/Kontakt">Kontakt</Link>
                </li>
            </ul>
        </nav>
    );
}
