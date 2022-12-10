import React, { useContext } from 'react';
import {
    getUserData,
    supabase,
} from '../../../context/supabase/SupabaseActions';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { useNavigate } from 'react-router-dom';
import SupabaseContext from '../../../context/supabase/SupabaseContext';

export default function Login() {
    const navigate = useNavigate();
    const { dispatch } = useContext(SupabaseContext);

    const getUser = async () => {
        return await getUserData();
    };

    supabase.auth.onAuthStateChange(async (event) => {
        if (event !== 'SIGNED_OUT') {
            const data = await getUser();
            console.log(data);
            dispatch({ type: 'GET_USER_DATA', payload: data });
            navigate('/');
        }
    });
    return (
        <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="light"
        />
    );
}
