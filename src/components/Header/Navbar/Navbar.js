import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

export default function Navbar() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const triggerNav = () => {
        if (mobileNavOpen) {
            setMobileNavOpen(false);
        } else {
            setMobileNavOpen(true);
        }
    };

    return (
        <>
            <nav>
                <CustomNavList />
            </nav>
            <div
                className={
                    mobileNavOpen
                        ? 'mobile-active mobile-nav-button'
                        : 'mobile-nav-button'
                }
                onClick={triggerNav}>
                <div className="mobile-nav-first"></div>
                <div className="mobile-nav-second"></div>
                <div className="mobile-nav-third"></div>
            </div>
            <div
                id="mobileNavContainer"
                className={mobileNavOpen ? 'mobile-active' : ''}
                onClick={triggerNav}>
                <nav>
                    <CustomNavList />
                </nav>
            </div>
        </>
    );

    function CustomLink({ destination, linkText }) {
        return <Link to={destination}>{linkText}</Link>;
    }

    function CustomNavList() {
        return (
            <ul>
                <li>
                    <CustomLink destination="/" linkText="Startseite" />
                </li>
                <li>
                    <CustomLink destination="/Wohnung1" linkText="Wohnung 1" />
                </li>
                <li>
                    <CustomLink destination="/Wohnung2" linkText="Wohnung 2" />
                </li>
                <li>
                    <CustomLink destination="/Anfahrt" linkText="Anfahrt" />
                </li>
                <li>
                    <CustomLink destination="/Preise" linkText="Preise" />
                </li>
                <li>
                    <CustomLink destination="/Freizeit" linkText="Freizeit" />
                </li>
                <li>
                    <CustomLink
                        destination="/Gaestebuch"
                        linkText="Gästebuch"
                    />
                </li>
                <li>
                    <CustomLink destination="/Kontakt" linkText="Kontakt" />
                </li>
            </ul>
        );
    }
}
