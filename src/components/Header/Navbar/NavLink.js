import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLink({ destination, linkText }) {
    return <Link to={destination}>{linkText}</Link>;
}
