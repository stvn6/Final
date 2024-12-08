import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../store/useCart";
import CartItem from "../CartItem/CartItem";
import { useNavigate } from "react-router-dom"; 

export default function Cart() {
    const { cartItems, totalPrice, clearCart } = useCart(); 
    const navigate = useNavigate(); 

    return (
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-3xl">
            <div className="flex items-center border-b pb-4 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <FaShoppingCart className="text-primary" />
                    Carrito de Compras
                </h2>
            </div>

            {cartItems.length > 0 ? (
                <>
                    <div className="space-y-6">
                        {cartItems.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>
                    <div className="mt-8 text-right">
                        <h2 className="text-xl font-bold">
                            Total: ${totalPrice.toLocaleString()} CLP
                        </h2>

                        <div className="flex gap-4 justify-end mt-4">
                        <button onClick={clearCart}
                        class="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">Vaciar 🛒
                        <svg viewBox="0 0 15 15" class="w-5 fill-white"><svg class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path
                        stroke-linejoin="round"
                        stroke-linecap="round"></path>
                        </svg>
                        Button
                        </svg>
                        </button>
                        <button
                            class="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#14b8a6] via-[#059669] to-[#047857] hover:shadow-xl hover:shadow-green-500 hover:scale-105 duration-300 hover:from-[#047857] hover:to-[#14b8a6]"
                            >Finalizar
                        <svg class="w-5 fill-white" viewBox="0 0 15 15">
                        <svg
                            class="w-6 h-6"
                            stroke="currentColor"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                        <path
                            stroke-linejoin="round"
                            stroke-linecap="round"
                        ></path>
                        </svg>
                    </svg>
                    </button>

                        </div>
                    </div>
                </>
            ) : (
                <div className="text-center py-8">
                    <p className="text-lg font-semibold text-gray-600 mb-4">
                        Tu carrito está vacío. ¡Añade productos para comenzar a comprar!
                    </p>
                    <button
                        onClick={() => navigate("/products")} 
                        className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition"
                    >
                        Ver productos
                    </button>
                </div>
            )}
        </div>
    );
}
