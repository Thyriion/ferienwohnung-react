import { useContext, useEffect } from 'react';
import SupabaseContext from '../../../context/supabase/SupabaseContext';
import {
    getImageData,
    deleteImage,
} from '../../../context/supabase/SupabaseActions';
import './DeleteFilesStyles.scss';

export default function DeleteFiles({ from }) {
    const { images, dispatch } = useContext(SupabaseContext);

    const handleDelete = (imageName) => {
        dispatch({ type: 'SET_EDIT_LOADING', payload: true });
        const deleteFile = async () => {
            await deleteImage(imageName, from);
            dispatch({ type: 'DELETE_FILE' });
        };
        deleteFile();
    };

    useEffect(() => {
        const setImages = async () => {
            const data = await getImageData(from);
            dispatch({ type: 'GET_IMAGES', payload: data });
        };
        setImages();
    }, [from, dispatch]);

    return (
        <div className="delete-image-wrapper">
            {images.map((image, index) => {
                return (
                    <div key={index} className="delete-image">
                        <img src={image.img} alt={image.alt} height={200} />
                        <button
                            onClick={() => {
                                handleDelete(image.alt);
                            }}
                        >
                            Löschen
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
