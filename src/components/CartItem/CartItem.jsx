import React from "react";
import { useCart } from "../../store/useCart";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

export default function CartItem({ item }) {
    const { addToCart, removeFromCart, removeAllFromCart } = useCart();

    return (
        <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
                <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 rounded"
                />
                <div className="ml-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-500">Precio: ${item.price} CLP</p>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-gray-300 text-gray-700 p-2 rounded hover:bg-gray-400 transition"
                >
                    <FaMinus />
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                    onClick={() => addToCart(item.id)}
                    className="bg-gray-300 text-gray-700 p-2 rounded hover:bg-gray-400 transition"
                    disabled={item.quantity >= item.stock} // Desactiva el botón si alcanza el stock
                >
                    <FaPlus />
                </button>
                <button
                    onClick={() => removeAllFromCart(item.id)}
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
                >
                    <FaTrash />
                </button>
            </div>
        </div>
    );
}
