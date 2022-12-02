import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getImageData = async () => {
    const files = (await supabase.storage.from('images').list()).data;

    const images = await Promise.all(
        files.map(async (image) => {
            const { data, error } = await supabase.storage
                .from('images')
                .download(image.name);

            if (error) {
                throw error;
            }
            return {
                alt: 'Sliderbild',
                img: URL.createObjectURL(data),
            };
        })
    );

    return images;
};

export const uploadImage = async (event) => {
    try {

        if (!event.target.files || event.target.files.length === 0) {
            throw new Error('Bitte wähle ein Bild aus zum Hochladen.');
        }

        const file = event.target.files[0];
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        let { error: uploadError } = await supabase.storage
            .from('images')
            .upload(filePath, file);

        if (uploadError) {
            throw uploadError;
        }
    } catch (error) {
        alert(error.message);
    }
}
