import { useContext, useEffect, useMemo } from 'react';
import SupabaseContext from '../../../context/supabase/SupabaseContext';
import {
    getImageData,
    deleteImage,
} from '../../../context/supabase/SupabaseActions';

export default function DeleteFiles() {
    const { images, dispatch } = useContext(SupabaseContext);

    const handleDelete = (imageName) => {
        dispatch({ type: 'SET_EDIT_LOADING', payload: true });
        const deleteFile = async () => {
            await deleteImage(imageName);
            dispatch({ type: 'DELETE_FILE' });
        };
        deleteFile();
    };

    useEffect(() => {
        const setImages = async () => {
            const data = await getImageData();
            dispatch({ type: 'GET_IMAGES', payload: data });
        };
        setImages();
    }, []);

    return (
        <>
            {images.map((image, index) => {
                return (
                    <div key={index}>
                        <img src={image.img} alt={image.alt} height={100} />
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
        </>
    );
}
