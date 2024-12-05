import React from "react";
import { FaShoppingCart } from 'react-icons/fa';
import Logo from "/coffelogo.jpg";
import { Link } from "react-router-dom";
import { useCart } from '../../store/useCart';

const Menus = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Products",
        link: "/products",
    },
    {
        id: 3,
        name: "About",
        link: "/about",
    },
    {
        id: 4,
        name: "Contact",
        link: "/contact",
    },
];

const Navbar = () => {
    const { cartItems } = useCart(); 

    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
            <div className="container py-2">
                <div className="flex justify-between items-center gap-4">
                    <div className="">
                        <Link to="/" className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive">
                            <img src={Logo} alt="logo" className="w-14" />
                            Juan Valdez
                        </Link>
                    </div>
                    {/* Links */}
                    <div className="flex justify-between items-center gap-4">
                        <ul className="hidden sm:flex items-center gap-4">
                            {
                                Menus.map((data, index) => (
                                    <li key={index}>
                                        <Link to={data.link}
                                           className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200">
                                            {data.name}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </div>
                    {/* Carrito */}
                    <div className="space-x-4">
                        <Link to="/cart">
                            <button className="relative">
                                <FaShoppingCart className="text-2xl" />
                                <span
                                    className="absolute -top-3 -right-3 bg-primary text-white text-xs rounded-full w-5 h-5 flex justify-center items-center">
                                    {totalQuantity >= 0 ? totalQuantity : ''} 
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
