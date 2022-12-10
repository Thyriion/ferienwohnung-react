import React, { useContext } from 'react';
import SupabaseContext from '../../../context/supabase/SupabaseContext';
import NavLink from './NavLink';
import { signOut } from '../../../context/supabase/SupabaseActions';

export default function NavList() {
    const { user, dispatch } = useContext(SupabaseContext);
    console.log(user);
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
            <li>
                {Object.keys(user).length === 0 ? (
                    <NavLink destination="/Login" linkText="Login" />
                ) : (
                    <NavLink destination="/LogOut" linkText="Logout" />
                )}
            </li>
        </ul>
    );
}
