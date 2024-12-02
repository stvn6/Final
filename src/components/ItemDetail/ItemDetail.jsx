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
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const incrementQuantity = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };

    const handleAddToCart = () => {
        if (quantity > 0 && quantity <= product.stock) {
            addToCart(product.id, quantity, true); // El tercer parámetro indica que viene desde ItemDetail
            alert(`Se han añadido ${quantity} unidades de ${product.name} al carrito.`);
        } else {
            alert("Cantidad seleccionada no válida o excede el stock disponible.");
        }
    };

    const precioTotal = product.price * quantity;

    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className='container mx-auto my-[100px] max-w-[1170px]'>
            <div className="grid grid-cols-2 pt-[50px] pb-[100px]">
                <div className="span-col-1 pr-[30px]">
                    <img src={product.img} alt="Imagen del producto" className="w-full rounded-[20px]" />
                </div>
                <div>
                    <p className="text-[10px]">{product.description}</p>
                    <h1 className="text-[40px] font-medium uppercase">{product.name}</h1>
                    <p>${product.price} CLP</p>
                    <div>
                        <h3>Tamaños disponibles:</h3>
                        <ul className='flex'>
                            {product.sizes.map((size, index) => (
                                <li
                                    key={index}
                                    className='text-[15px] my-[20px] border-[1px] w-[50px] flex justify-center mx-[10px] rounded'>
                                    {size}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className='text-[20px] my-[20px]'>Stock: {product.stock}</p>

                    <div className='inline-flex items-center border rounded-md shadow-md'>
                        <button
                            onClick={decrementQuantity}
                            className='rounded-l-md hover:bg-brown-600 w-[60px] h-[60px] text-[24px] flex justify-center items-center transition duration-200'>
                            -
                        </button>
                        <p className='text-[24px] px-[15px] text-center'>{quantity}</p>
                        <button
                            onClick={incrementQuantity}
                            className='rounded-r-md w-[60px] h-[60px] text-[24px] flex justify-center items-center transition duration-200'>
                            +
                        </button>
                    </div>

                    <p className='text-[20px] my-[20px]'>Precio: ${product.price} CLP por unidad</p>
                    <p className='text-[20px] my-[20px]'>Precio Total: ${precioTotal} CLP</p>

                    <button
                        onClick={handleAddToCart}
                        className="bg-primary/100 text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition"
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
}
