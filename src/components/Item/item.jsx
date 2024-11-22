import { Link } from "react-router-dom";
import { useCart } from "../../store/useCart";

export default function Items({ id, name, price, img }) {
    const { addToCart } = useCart(); // Hook para agregar productos al carrito

    return (
        <div className="flex w-[200px] flex-col items-center my-4 p-4 border rounded-lg shadow-md transition-transform hover:scale-105 mb-4">
            {/* Imagen del producto */}
            <Link to={`/products/${id}`} className="">
                <img className="h-40 object-cover rounded-md" src={img} alt="Imagen Producto" />
            </Link>

            {/* Nombre del producto */}
            <Link to={`/products/${id}`} className="text-lg font-bold my-2 tracking-wide uppercase text-[#404040] hover:text-[rgb(210,105,30)]">
                {name}
            </Link>

            {/* Precio del producto */}
            <h4 className="text-[18px] font-bold mb-[20px]">${price}</h4>

            {/* Botón para agregar al carrito */}
            <button
                onClick={() => addToCart(id)} // Llama a la función de agregar al carrito
                className="bg-primary/100 text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition"
            >
                Agregar al carrito
            </button>
        </div>
    );
}
