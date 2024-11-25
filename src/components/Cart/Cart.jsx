import { useCart } from "../../store/useCart";
import { CartItem } from "../CartItem/CartItem.jsx";

const Cart = () => {
    const { cartItems, totalPrice } = useCart();

    return (
        <div className="flex flex-col items-start">
            <h2 className="text-lg font-bold mb-4">Carrito | Total: ${totalPrice}</h2>
            <div className="flex flex-col gap-4">
                {cartItems.map((item, index) => (
                    <CartItem key={index} {...item} />
                ))}
            </div>
 </div>
    );
};

export default Cart;