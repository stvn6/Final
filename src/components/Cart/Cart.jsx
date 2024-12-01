import { useCart } from "../../store/useCart";
import { CartItem } from "../CartItem/CartItem.jsx";
import { FaShoppingCart } from "react-icons/fa"; // Ícono de carrito
import { MdPayment } from "react-icons/md"; // Ícono de pago

const Cart = () => {
    const { cartItems, totalPrice } = useCart();

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            {/* Encabezado */}
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2 flex items-center gap-2">
                <FaShoppingCart className="text-primary" />
                Carrito de Compras
            </h2>

            {/* Lista de Productos */}
            <div className="space-y-4">
                {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                        <CartItem key={index} {...item} />
                    ))
                ) : (
                    <p className="text-gray-500 text-center">
                        Tu carrito está vacío. ¡Agrega algunos productos! 🛍️
                    </p>
                )}
            </div>

            {/* Resumen del Total */}
            <div className="mt-6 flex justify-between items-center border-t pt-4">
                <span className="text-xl font-semibold text-gray-700">
                    Total: ${totalPrice.toFixed(2)}
                </span>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded flex items-center gap-2 transition">
                    <MdPayment className="text-lg" />
                    Proceder al Pago
                </button>
            </div>
        </div>
    );
};

export default Cart;
