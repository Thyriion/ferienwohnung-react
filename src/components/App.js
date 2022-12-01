import './App.scss';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import FileUpload from '../FileUpload';

function App() {
    return (
        <>
            <Header />
            <Main />
            <FileUpload />
            <Footer />
        </>
    );
}

export default App;
