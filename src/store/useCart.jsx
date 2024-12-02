import { create } from "zustand";
import { products } from "../data/asyncMock.jsx"; // Importa los productos iniciales

export const useCart = create((set) => ({
    products: products, // Lista inicial de productos
    cartItems: [], // Carrito vacío al iniciar
    totalPrice: 0, // Precio total inicial

    addToCart: (productId) =>
        set((state) => {
            const product = state.products.find((item) => item.id === productId);
            if (product) {
                const cartItem = state.cartItems.find((cartItem) => cartItem.id === productId);
                if (cartItem) {
                    const updatedCartItems = state.cartItems.map((cartItem) =>
                        cartItem.id === productId
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
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
                    if (product.stock > 0) {
                        const updatedCartItems = [
                            ...state.cartItems,
                            { ...product, quantity: 1 },
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
                        alert("Este producto está fuera de stock.");
                        return state;
                    }
                }
            }
            return state;
        }),

    removeFromCart: (productId) =>
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

    // Función para vaciar el carrito
    clearCart: () =>
        set(() => ({
            cartItems: [],
            totalPrice: 0,
        })),
}));
