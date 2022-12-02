import { useContext } from 'react';
import SupabaseContext from '../../../context/supabase/SupabaseContext';
import { uploadImage } from '../../../context/supabase/SupabaseActions';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

export default function FileUpload() {
    const { loading, dispatch } = useContext(SupabaseContext);

    const handleUpload = async (event) => {
        dispatch({ type: 'SET_LOADING' });
        await uploadImage(event);
        dispatch({ type: 'UPLOAD_FILE' });
    };

    return (
        <div>
            {loading ? (
                <LoadingSpinner />
            ) : (
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
                            disabled={loading}
                        />
                    </div>
                </>
            )}
        </div>
    );
}
