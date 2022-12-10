import React, { Suspense, useContext, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './Pages/Pages.scss';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';
import Edit from './ImageSlider/Edit';
import Login from './Pages/Login';
import SupabaseContext from '../../context/supabase/SupabaseContext';
import LogOut from './Pages/LogOut';

const Home = React.lazy(() => import('./Pages/Home'));
const Wohnung1 = React.lazy(() => import('./Pages/Wohnung1'));
const Wohnung2 = React.lazy(() => import('./Pages/Wohnung2'));
const Anfahrt = React.lazy(() => import('./Pages/Anfahrt'));
const Preise = React.lazy(() => import('./Pages/Preise'));
const Freizeit = React.lazy(() => import('./Pages/Freizeit'));
const Gaestebuch = React.lazy(() => import('./Pages/Gaestebuch'));
const Kontakt = React.lazy(() => import('./Pages/Kontakt'));

export default function Main() {
    const { dispatch } = useContext(SupabaseContext);

    useEffect(() => {
        async function getUserData() {
            const user = await getUserData();
            dispatch({ type: 'GET_USER_DATA', payload: user });
        }
        getUserData();
    }, []);

    return (
        <main>
            <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Wohnung1" element={<Wohnung1 />} />
                    <Route path="/Wohnung2" element={<Wohnung2 />} />
                    <Route path="/Anfahrt" element={<Anfahrt />} />
                    <Route path="/Preise" element={<Preise />} />
                    <Route path="/Freizeit" element={<Freizeit />} />
                    <Route path="/Gaestebuch" element={<Gaestebuch />} />
                    <Route path="/Kontakt" element={<Kontakt />} />
                    <Route path="/Edit" element={<Edit />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/LogOut" element={<LogOut />} />
                </Routes>
            </Suspense>
        </main>
    );
}
