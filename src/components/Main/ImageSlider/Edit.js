import React, { useContext } from 'react';
import DeleteFiles from './DeleteFiles';
import FileUpload from './FileUpload';
import SupabaseContext from '../../../context/supabase/SupabaseContext';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

export default function Edit() {
    const { editLoading } = useContext(SupabaseContext);
    return (
        <>
            {editLoading ? <LoadingSpinner /> : <DeleteFiles />}
            <FileUpload />
        </>
    );
}
