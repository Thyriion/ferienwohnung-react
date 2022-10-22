import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    };

    return (
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <ul>
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/Wohnung">Wohnung</CustomLink>
                    <CustomLink to="/Wohnung2">Wohnung 2</CustomLink>
                    <CustomLink to="/Preise">Preise</CustomLink>
                </ul>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}

export default Navbar;
