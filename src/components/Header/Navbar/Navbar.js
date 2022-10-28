import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
    return (
        <nav>
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
        </nav>
    );

    function CustomLink({ destination, linkText }) {
        return <Link to={destination}>{linkText}</Link>;
    }
}
