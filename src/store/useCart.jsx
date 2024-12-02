import { create } from "zustand";
import { products } from "../data/asyncMock.jsx";

export const useCart = create((set) => ({
    products: products,
    cartItems: [],
    totalPrice: 0,

    addToCart: (productId) =>
        set((state) => {
            const product = state.products.find((item) => item.id === productId);
            if (product) {
                const cartItem = state.cartItems.find((cartItem) => cartItem.id === productId);

                if (cartItem) {
                    // Verifica si la cantidad no excede el stock disponible
                    if (cartItem.quantity < product.stock) {
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
                        alert("No puedes agregar más, alcanzaste el stock disponible.");
                        return state;
                    }
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
            const updatedCartItems = state.cartItems.map((cartItem) => {
                if (cartItem.id === productId && cartItem.quantity > 1) {
                    return { ...cartItem, quantity: cartItem.quantity - 1 }; // Decrease the quantity
                }
                return cartItem; // Otherwise, return the item as is
            }).filter(cartItem => cartItem.quantity > 0); // Remove items with quantity 0

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
            // Filtrar el carrito para eliminar todas las cantidades de un producto
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
