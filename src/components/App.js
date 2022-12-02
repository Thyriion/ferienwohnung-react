import './App.scss';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { SupabaseProvider } from '../context/supabase/SupabaseContext';

function App() {
    return (
        <>
            <SupabaseProvider>
                <Header />
                <Main />
                <Footer />
            </SupabaseProvider>
        </>
    );
}

export default App;
