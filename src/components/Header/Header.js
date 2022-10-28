import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import "./header.scss";
import { Link } from "react-router-dom";

export default function Header() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const triggerNav = () => {
        if (mobileNavOpen) {
            setMobileNavOpen(false);
        } else {
            setMobileNavOpen(true);
        }
    };
    return (
        <header>
            <Link to="/">
                <img src="/Logo.jpg" alt="Das Logo" className="logo" />
            </Link>
            <Navbar />
            <div
                className={
                    mobileNavOpen
                        ? "mobile-active mobile-nav-button"
                        : "mobile-nav-button"
                }
                onClick={triggerNav}>
                <div className="mobile-nav-first"></div>
                <div className="mobile-nav-second"></div>
                <div className="mobile-nav-third"></div>
            </div>
        </header>
    );
}
