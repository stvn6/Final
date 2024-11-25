import { create } from "zustand";
import { products } from "../data/asyncMock.jsx"; // Importa 'initProducts' directamente

// Estado inicial de la tienda
export const useCart = create((set, get) => ({
    products: products, // Lista inicial de productos
    cartItems: [], // Carrito vacío al iniciar
    totalPrice: 0, // Precio total inicial

    // Función para calcular el precio total
    calculateTotalPrice: () => {
        const total = get().cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        return total;
    },

    addToCart: (productId) =>
        set((state) => {
            const product = state.products.find((item) => item.id === productId);

            if (product) {
                const cartItem = state.cartItems.find(
                    (cartItem) => cartItem.id === productId
                );

                if (cartItem) {
                    // Si el producto ya está en el carrito, aumenta la cantidad
                    const updatedQuantity = cartItem.quantity + 1;
                    const updatedCartItems = state.cartItems.map((cartItem) =>
                        cartItem.id === productId
                            ? { ...cartItem, quantity: updatedQuantity }
                            : cartItem
                    );

                    return {
                        cartItems: updatedCartItems,
                        totalPrice: state.calculateTotalPrice(), // Recalcular el precio total
                    };
                } else {
                    // Si el producto no está en el carrito, agrégalo
                    const updatedCartItems = [...state.cartItems, { ...product, quantity: 1 }];
                    return {
                        cartItems: updatedCartItems,
                        totalPrice: state.calculateTotalPrice(), // Recalcular el precio total
                    };
                }
            }
            return state; // Retorna el estado si no se encuentra el producto
        }),

    removeFromCart: (productId) =>
        set((state) => {
            const itemIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.id === productId
            );

            if (itemIndex !== -1) {
                const updatedCartItems = [...state.cartItems];
                const itemToRemove = updatedCartItems[itemIndex];

                if (itemToRemove.quantity > 1) {
                    // Si hay más de una unidad, disminuir la cantidad
                    updatedCartItems[itemIndex] = {
                        ...itemToRemove,
                        quantity: itemToRemove.quantity - 1,
                    };

                    return {
                        cartItems: updatedCartItems,
                        totalPrice: state.calculateTotalPrice(), // Recalcular el precio total
                    };
                } else {
                    // Si es la última unidad, eliminar el producto del carrito
                    updatedCartItems.splice(itemIndex, 1);

                    return {
                        cartItems: updatedCartItems,
                        totalPrice: state.calculateTotalPrice(), // Recalcular el precio total
                    };
                }
            }
            return state; // Retorna el estado si no se encuentra el producto
        }),
}));