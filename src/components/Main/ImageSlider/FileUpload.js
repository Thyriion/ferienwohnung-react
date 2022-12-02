import { useContext } from 'react';
import SupabaseContext from '../../../context/supabase/SupabaseContext';
import { uploadImage } from '../../../context/supabase/SupabaseActions';

export default function FileUpload() {
    const { editLoading, dispatch } = useContext(SupabaseContext);

    const handleUpload = async (event) => {
        dispatch({ type: 'SET_EDIT_LOADING', payload: true });
        await uploadImage(event);
        dispatch({ type: 'UPLOAD_FILE' });
    };

    return (
        <div>
            <>
                <label className="button primary block" htmlFor="single">
                    Füge ein Bild zum Slider
                </label>
                <div className="visually-hidden">
                    <input
                        type="file"
                        id="single"
                        accept="image/*"
                        onChange={handleUpload}
                        disabled={editLoading}
                    />
                </div>
            </>
        </div>
    );
}
