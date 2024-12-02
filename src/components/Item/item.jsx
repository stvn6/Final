import { Link } from "react-router-dom";
import { useCart } from "../../store/useCart";

export default function Item({ id, name, price, img, stock }) {
    const { addToCart } = useCart();

    return (
        <div className="flex w-[220px] flex-col items-center my-4 p-4 border rounded-lg shadow-lg bg-white transition-transform hover:scale-105 hover:shadow-xl">
            <Link to={`/products/${id}`} className="mb-3">
                <img
                    className="h-40 w-full object-cover rounded-lg shadow-md"
                    src={img}
                    alt={`${name}`}
                />
            </Link>
            <Link
                to={`/products/${id}`}
                className="text-lg font-semibold my-2 tracking-wide text-gray-800 hover:text-primary transition-colors"
            >
                {name}
            </Link>

            <div className="w-full mt-auto">
                <h4 className="text-[18px] font-bold mb-4 justify-center items-center text-primary">
                    ${price.toLocaleString()} CLP
                </h4>

                {/* Indicador de disponibilidad */}
                <p className={`text-sm ${stock > 0 ? 'text-green-500' : 'text-red-500'} font-semibold`}>
                    {stock > 0 ? 'Disponible' : 'Fuera de Stock'}
                </p>

            </div>
        </div>
    );
}
