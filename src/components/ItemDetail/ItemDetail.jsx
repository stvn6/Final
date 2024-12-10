import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock.jsx';
import { useCart } from '../../store/useCart';
import Loading from "../Loading/Loading.jsx";

export default function ItemDetail() {
    const { productId } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState({ product: 0, stock: 0 });
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [productId]);

    const decrementQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const incrementQuantity = () => {
        if (quantity < product.stock) setQuantity(quantity + 1);
    };

    const handleAddToCart = () => {
        if (quantity > 0 && quantity <= product.stock) {
            addToCart(product.id, quantity, true);
            alert(`¡${quantity} unidades de ${product.name} añadidas al carrito!`);
        } else {
            alert("Cantidad no válida o supera el stock disponible.");
        }
    };

    const precioTotal = product.price * quantity;

    if (loading) return <Loading />;
    if (!product) return <div>Producto no encontrado.</div>;

    return (
        <div className="container mx-auto my-12 max-w-[1170px] p-4">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                    <img
                        src={product.img}
                        alt={product.name}
                        className="w-full rounded-xl shadow-lg"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1 rounded-xl">
                        Stock: {product.stock}
                    </div>
                </div>

                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                        <p className="text-gray-600 mb-6">{product.description}</p>
                        <p className="text-2xl font-semibold mb-2 text-primary">
                            ${product.price} CLP
                        </p>
                        <p className="text-lg text-gray-500">
                            Precio total: <span className="font-semibold">${precioTotal} CLP</span>
                        </p>
                    </div>

                    <div className="my-6">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={decrementQuantity}
                                className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                            >
                                -
                            </button>
                            <span className="text-xl">{quantity}</span>
                            <button
                                onClick={incrementQuantity}
                                className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <button onClick={handleAddToCart} class="cursor-pointer font-semibold overflow-hidden relative z-100 border border-primary group px-8 py-2">
                        <span class="relative z-10 text-primary group-hover:text-white text-xl duration-500">Agregar al Carrito</span>
                        <span class="absolute w-full h-full bg-primary -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                        <span class="absolute w-full h-full bg-primary -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                    </button>

                    <div className="mt-6">
                        <h3 className="font-semibold text-lg mb-2">Tamaños disponibles:</h3>
                        <ul className="flex space-x-4">
                            {product.sizes.map((size, index) => (
                                <li
                                    key={index}
                                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-primary hover:text-white transition"
                                >
                                    {size}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
