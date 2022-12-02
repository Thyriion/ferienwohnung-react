import { createClient } from '@supabase/supabase-js';

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
                    .download(image.name);

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
        const filePath = `${file.name}`;
        console.log(filePath);
        let { error: uploadError } = await supabase.storage
            .from('images')
            .upload(filePath, file);

        console.log(uploadError);
        if (uploadError) {
            throw uploadError;
        }

        const { error } = await supabase.storage
            .from('images')
            .move(filePath, `${folder}/${file.name}-${folder}`);

        if (error) {
            throw error;
        }
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
