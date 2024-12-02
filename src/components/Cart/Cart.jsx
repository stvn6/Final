import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../store/useCart";
import CartItem from "../CartItem/CartItem";

export default function Cart() {
    const { cartItems, totalPrice, clearCart } = useCart(); 

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
                        {/* Botones para vaciar carrito y finalizar compra */}
                        <div className="flex gap-4 justify-end mt-4">
                            <button
                                onClick={clearCart} // Llama a la función clearCart
                                className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-500 transition"
                            >
                                Vaciar carrito
                            </button>
                            <button
                                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 transition"
                            >
                                Finalizar Compra
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <div className="text-center">
                    <p className="text-gray-500">Tu carrito está vacío.</p>
                    <button
                        className="bg-primary text-white py-2 px-4 rounded-lg mt-4 hover:bg-primary/80 transition"
                        onClick={() => window.location.href = "/products"}
                    >
                        Ver Productos
                    </button>
                </div>
            )}
        </div>
    );
}
