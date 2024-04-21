import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/navBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Footer } from './components/Footer/Footer';
import { CardError } from './components/CardError/CardError';
import { BotonUp } from './components/BotonUp/BotonUp';
import { Contacto } from './components/Contacto/Contacto';
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart/Cart';
import './App.css';
import './components/CardError/CardError.css';

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <header>
                    <NavBar />
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/category/:id" element={<ItemListContainer />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/item/:id" element={<ItemDetailContainer />} />
                        <Route path="/contacto" element={<Contacto />} />
                        <Route path="*" element={<CardError />} />
                    </Routes>
                </main>
                <BotonUp />
                <Footer />
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
