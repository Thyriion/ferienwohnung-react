import React, { useContext } from 'react';
import DeleteFiles from './DeleteFiles';
import FileUpload from './FileUpload';
import SupabaseContext from '../../../context/supabase/SupabaseContext';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { useLocation } from 'react-router-dom';

export default function Edit() {
    const { editLoading } = useContext(SupabaseContext);
    const location = useLocation();
    const { from } = location.state;

    return (
        <>
            {editLoading ? <LoadingSpinner /> : <DeleteFiles from={from} />}
            <FileUpload from={from} />
        </>
    );
}
