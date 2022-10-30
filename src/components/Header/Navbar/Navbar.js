import React, { useState } from 'react';
import './navbar.scss';
import NavList from './NavList';

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
                <NavList />
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
                    <NavList />
                </nav>
            </div>
        </>
    );
}
