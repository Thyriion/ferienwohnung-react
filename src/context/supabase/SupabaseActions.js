import { createClient } from '@supabase/supabase-js';
import { Navigate } from 'react-router-dom';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getImageData = async (folder) => {
    const files = (await supabase.storage.from('images').list(`${folder}`))
        .data;
    const images = await Promise.all(
        files
            .filter((image) => image.name !== '.emptyFolderPlaceholder')
            .map(async (image) => {
                const { data, error } = await supabase.storage
                    .from('images')
                    .download(`${folder}/${image.name}`);

                if (error) {
                    throw error;
                }
                return {
                    alt: image.name,
                    img: URL.createObjectURL(data),
                };
            })
    );

    return images;
};

export const uploadImage = async (event, folder) => {
    try {
        if (!event.target.files || event.target.files.length === 0) {
            throw new Error('Bitte wähle ein Bild aus zum Hochladen.');
        }

        const file = event.target.files[0];
        const filePath = `${folder}/${file.name}`;
        let { error: uploadError } = await supabase.storage
            .from('images')
            .upload(filePath, file);

        if (uploadError) {
            throw uploadError;
        }

        alert('Datei erfolgreich hochgeladen');
    } catch (error) {
        alert(error.message);
    }
};

export const deleteImage = async (fileName, folder) => {
    try {
        const { error } = await supabase.storage
            .from('images')
            .remove([`${folder}/${fileName}`]);

        if (error) {
            throw error;
        }
    } catch (error) {
        alert(error.message);
    }
};

export const getUserData = async () => {
    const userData = await supabase.auth.getUser();

    return userData.data.user;
};

export const signOut = async () => {
    try {
        const { error } = await supabase.auth.signOut();

        if (error) {
            throw error;
        }
    } catch (error) {
        alert(error.message);
    }
};
