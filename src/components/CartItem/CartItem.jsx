import { useCart } from "../../store/useCart";

export const CartItem = ({ id, name, img, price, quantity }) => {
    const { removeFromCart } = useCart();

    return (
        <div className="flex items-center gap-6">

            <div className="relative">
                <img
                    src={img}
                    alt={name}
                    className="w-12 h-12 object-cover rounded border border-gray-800"
                />
                <span className="absolute top-0 right-0 w-6 h-6 bg-red-500 text-white text-sm font-bold rounded-full flex items-center justify-center -mt-2 -mr-2">
          {quantity}
        </span>
            </div>
            {/* Detalles del producto */}
            <div className="flex flex-col items-start">
                <span className="font-bold">{name}</span>
                <p className="text-sm text-gray-500">
                    Precio por unidad: <b className="text-black font-bold">${price}</b>
                </p>
            </div>
            {/* Botón para remover */}
            <button
                onClick={() => removeFromCart(id)}
                className="border border-gray-800 px-2 py-1 hover:contrast-90 transition"
            >
                Remover
            </button>
        </div>
    );
};
