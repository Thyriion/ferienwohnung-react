import './App.scss';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import FileUpload from './Main/ImageSlider/FileUpload';
import { SupabaseProvider } from '../context/supabase/SupabaseContext';

function App() {
    return (
        <>
            <SupabaseProvider>
                <Header />
                <Main />
                <FileUpload />
                <Footer />
            </SupabaseProvider>
        </>
    );
}

export default App;
