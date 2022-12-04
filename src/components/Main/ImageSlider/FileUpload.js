import { useContext } from 'react';
import SupabaseContext from '../../../context/supabase/SupabaseContext';
import { uploadImage } from '../../../context/supabase/SupabaseActions';
import './FileUploadStyles.scss';

export default function FileUpload({ from }) {
    const { editLoading, dispatch } = useContext(SupabaseContext);
    const handleUpload = async (event) => {
        dispatch({ type: 'SET_EDIT_LOADING', payload: true });
        await uploadImage(event, from);
        dispatch({ type: 'UPLOAD_FILE' });
    };

    return (
        <div className="file-upload-wrapper">
            <>
                <label className="button-label" htmlFor="single">
                    Füge ein Bild zum Slider
                </label>
                <label className="custom-file-upload">
                    <input
                        type="file"
                        id="single"
                        accept="image/*"
                        onChange={handleUpload}
                        disabled={editLoading}
                    />
                    Datei auswählen
                </label>
            </>
        </div>
    );
}
