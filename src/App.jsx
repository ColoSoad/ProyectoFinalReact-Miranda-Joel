import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/navBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Footer } from './components/Footer/Footer';
import { CardError } from './components/CardError/CardError';
import { BotonUp } from './components/BotonUp/BotonUp';
import './App.css';
import './components/CardError/CardError.css';
import { Contacto } from './components/Contacto/Contacto';

function App() {
    return (
        <BrowserRouter>
            <header>
                <NavBar />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:id" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="*" element={<CardError />} />
                </Routes>
            </main>
            <BotonUp />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
