import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../../../context/supabase/SupabaseActions';
import SupabaseContext from '../../../context/supabase/SupabaseContext';

export default function LogOut() {
    const navigate = useNavigate();
    const { dispatch } = useContext(SupabaseContext);

    const logOut = async () => {
        await signOut();
        dispatch({ type: 'SIGN_OUT' });
        navigate('/');
    };
    return (
        <>
            <button onClick={() => logOut()}>Ausloggen</button>
        </>
    );
}
