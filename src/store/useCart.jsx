import { create } from "zustand";
import { products } from "../data/asyncMock.jsx";

export const useCart = create((set) => ({
    products: products,
    cartItems: [],
    totalPrice: 0,

    addToCart: (productId, quantity = 1) =>
        set((state) => {
            const product = state.products.find((item) => item.id === productId);
            if (product) {
                const cartItem = state.cartItems.find((cartItem) => cartItem.id === productId);

                if (cartItem) {
                    // Verifica que la cantidad total no exceda el stock
                    const newQuantity = cartItem.quantity + quantity;
                    if (newQuantity <= product.stock) {
                        const updatedCartItems = state.cartItems.map((cartItem) =>
                            cartItem.id === productId
                                ? { ...cartItem, quantity: newQuantity }
                                : cartItem
                        );
                        const updatedTotalPrice = updatedCartItems.reduce(
                            (acc, item) => acc + item.price * item.quantity,
                            0
                        );
                        return {
                            cartItems: updatedCartItems,
                            totalPrice: updatedTotalPrice,
                        };
                    } else {
                        alert("No puedes agregar más productos, el stock es insuficiente.");
                        return state;
                    }
                } else {
                    if (quantity <= product.stock) {
                        const updatedCartItems = [
                            ...state.cartItems,
                            { ...product, quantity },
                        ];
                        const updatedTotalPrice = updatedCartItems.reduce(
                            (acc, item) => acc + item.price * item.quantity,
                            0
                        );
                        return {
                            cartItems: updatedCartItems,
                            totalPrice: updatedTotalPrice,
                        };
                    } else {
                        alert("La cantidad seleccionada excede el stock disponible.");
                        return state;
                    }
                }
            }
            return state;
        }),

    removeFromCart: (productId) =>
        set((state) => {
            const updatedCartItems = state.cartItems.map((cartItem) => {
                if (cartItem.id === productId && cartItem.quantity > 1) {
                    return { ...cartItem, quantity: cartItem.quantity - 1 }; 
                }
                return cartItem; 
            }).filter(cartItem => cartItem.quantity > 0); 

            const updatedTotalPrice = updatedCartItems.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
            );

            return {
                cartItems: updatedCartItems,
                totalPrice: updatedTotalPrice,
            };
        }),

    removeAllFromCart: (productId) =>
        set((state) => {
            const updatedCartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== productId
            );

            const updatedTotalPrice = updatedCartItems.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
            );

            return {
                cartItems: updatedCartItems,
                totalPrice: updatedTotalPrice,
            };
        }),

    clearCart: () =>
        set(() => ({
            cartItems: [],
            totalPrice: 0,
        })),
}));
