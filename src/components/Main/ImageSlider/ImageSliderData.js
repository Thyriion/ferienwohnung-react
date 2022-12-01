import { supabase } from '../../../supabaseClient';

async function createImageData() {
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
}
export const ImageData = createImageData();
