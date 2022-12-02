import { useState } from 'react';
import { supabase } from './supabaseClient';

export default function FileUpload() {
    const [uploading, setUploading] = useState(false);

    const uploadImage = async (event) => {
        try {
            setUploading(true);

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
        } finally {
            setUploading(false);
        }
    };

    return (
        <div>
            {uploading ? (
                'Uploading...'
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
                            onChange={uploadImage}
                            disabled={uploading}
                        />
                    </div>
                </>
            )}
        </div>
    );
}
