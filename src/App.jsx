import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx';
import Services from './components/Services/Services.jsx';
import About from './components/About/About.jsx';
import ContactPage from './components/Contact/Contact.jsx';
import Products from './components/Products/Products.jsx';
import ProductsCategory from "./components/Category/Category.jsx";
import ItemDetail from "./components/ItemDetail/ItemDetail.jsx";
import Cart from "./components/Cart/Cart.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
    React.useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 700,
            easing: "ease-in",
            delay: 100,
        });
        AOS.refresh();
    }, []);

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/products" element={<Products />} />
                    <Route path='/products/:productId' element={<ItemDetail />} />
                    <Route path='/category/:categoryId' element={<ProductsCategory />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default App;
