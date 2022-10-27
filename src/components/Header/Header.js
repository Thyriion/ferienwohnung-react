import React from 'react';
import Navbar from './Navbar/Navbar';
import './header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <Link to="/">
                <img src="/Logo.jpg" alt="Das Logo" className="logo" />
            </Link>
            <Navbar />
        </header>
    );
}
