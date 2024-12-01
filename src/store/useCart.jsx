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
                const cartItem = state.cartItems.find(
                    (cartItem) => cartItem.id === productId
                );

                if (cartItem) {
                    // Verificar si la cantidad en el carrito alcanzó el stock disponible
                    if (cartItem.quantity >= product.stock) {
                        alert("No puedes agregar más unidades, alcanzaste el stock disponible.");
                        return state;
                    }

                    // Si no se alcanza el límite, aumentar la cantidad
                    const updatedCartItems = state.cartItems.map((cartItem) =>
                        cartItem.id === productId
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                            : cartItem
                    );

                    // Recalcular el precio total
                    const updatedTotalPrice = updatedCartItems.reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                    );

                    return {
                        cartItems: updatedCartItems,
                        totalPrice: updatedTotalPrice,
                    };
                } else {
                    // Si el producto no está en el carrito, agrégalo (si hay stock)
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
                } else {
                    // Si es la última unidad, eliminar el producto del carrito
                    updatedCartItems.splice(itemIndex, 1);
                }

                // Recalcular el precio total
                const updatedTotalPrice = updatedCartItems.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                );

                return {
                    cartItems: updatedCartItems,
                    totalPrice: updatedTotalPrice,
                };
            }

            return state; // Retorna el estado si no se encuentra el producto
        }),
}));
