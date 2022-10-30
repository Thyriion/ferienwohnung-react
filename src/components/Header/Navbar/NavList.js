import React from 'react';
import NavLink from './NavLink';

export default function NavList() {
    return (
        <ul>
            <li>
                <NavLink destination="/" linkText="Startseite" />
            </li>
            <li>
                <NavLink destination="/Wohnung1" linkText="Wohnung 1" />
            </li>
            <li>
                <NavLink destination="/Wohnung2" linkText="Wohnung 2" />
            </li>
            <li>
                <NavLink destination="/Anfahrt" linkText="Anfahrt" />
            </li>
            <li>
                <NavLink destination="/Preise" linkText="Preise" />
            </li>
            <li>
                <NavLink destination="/Freizeit" linkText="Freizeit" />
            </li>
            <li>
                <NavLink destination="/Gaestebuch" linkText="Gästebuch" />
            </li>
            <li>
                <NavLink destination="/Kontakt" linkText="Kontakt" />
            </li>
        </ul>
    );
}
