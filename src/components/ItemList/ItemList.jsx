import Item from "../Item/item.jsx";
import { getProducts } from "../../data/asyncMock";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading.jsx";
import { useCart } from "../../store/useCart";

export default function ItemList({ products: initialProducts }) {
    const [products, setProducts] = useState(initialProducts || []);
    const [loading, setLoading] = useState(!initialProducts);

    const { addToCart } = useCart(); 

    useEffect(() => {
        if (!initialProducts) {
            getProducts().then((data) => {
                setProducts(data);
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, [initialProducts]);

    return (
        <>
            {loading ? (
                <div>
                    <Loading />
                </div>
            ) : (
                <div className="flex flex-wrap">
                    {products.map((prod) => (
                        <Item {...prod} key={prod.id} onAddToCart={() => addToCart(prod.id)} />
                    ))}
                </div>
            )}
        </>
    );
}
