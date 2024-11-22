export const products = [
    {
        id: 1,
        name: 'Liofilizado Tradicional',
        price: '11200',
        description: 'Juan Valdez',
        stock: 5,
        img: 'https://www.juanvaldez.cl/cdn/shop/files/LiofilizadoTradicional95gr.jpg?v=1720100898&width=713',
        category: 'liofilizado',
        sizes: ['95gr']
    },
    {
        id: 2,
        name: 'Liofilizado Avellana',
        price: '11200',
        description: "Juan Valdez",
        stock: 5,
        img: 'https://www.juanvaldez.cl/cdn/shop/files/LiofilizadoAvellana95gr.jpg?v=1720100885&width=713',
        category: 'liofilizado',
        sizes: ['95gr']
    },

    {
        id: 3,
        name: 'Liofilizado Descafeinado',
        price: '11200',
        description: 'Juan Valdez',
        stock: 5,
        img: 'https://www.juanvaldez.cl/cdn/shop/files/LiofilizadoTradicionalDescafeinado95gr.jpg?v=1720100893',
        category: 'liofilizado',
        sizes: ['95gr']

    },
    {
        id: 4,
        name: 'Café Volcán',
        price: '11200',
        description: 'Juan Valdez',
        stock: 5,
        img: 'https://www.juanvaldez.cl/cdn/shop/files/CafeVolcan250gr.jpg?v=1720100955&width=713',
        category: 'grano',
        sizes: ['250gr']

    },
    {
        id: 5,
        name: 'Café Colina',
        price: '18800',
        description: 'Juan Valdez',
        stock: 5,
        img: 'https://www.juanvaldez.cl/cdn/shop/files/EmpacadoColina454gr.jpg?v=1720100942&width=713',
        category: 'grano',
        sizes: ['454gr']

    },
    {
        id: 6,
        name: 'Café Cumbre',
        price: '18800',
        description: 'Juan Valdez',
        stock: 5,
        img: 'https://www.juanvaldez.cl/cdn/shop/files/EmpacadoCumbre454gr.jpg?v=1720100937&width=713',
        category: 'grano',
        sizes: ['454gr']

    },
    {
        id: 7,
        name: 'Cápsulas Espresso Paisaje',
        price: '5500',
        description: 'Juan Valdez',
        stock: 5,
        img: 'https://www.juanvaldez.cl/cdn/shop/files/CapsulasEspressoPaisajeCulturalCafetero.jpg?v=1720100912',
        category: 'capsula',
        sizes: ['x8']

    },
    {
        id: 8,
        name: 'Cápsula Espresso Organico',
        price: '5500',
        description: 'Juan Valdez',
        stock: 5,
        img: 'https://www.juanvaldez.cl/cdn/shop/files/CapsulasEspressoOrganico.jpg?v=1720100915',
        category: 'capsula',
        sizes: ['x8']

    },
    {
        id: 9,
        name: 'Cápsula Espresso Mujeres',
        price: '5500',
        description: 'Juan Valdez',
        stock: 5,
        img: 'https://www.juanvaldez.cl/cdn/shop/files/CapsulasEspressoMujeresCafeteras.jpg?v=1720100917',
        category: 'capsula',
        sizes: ['250gr']

    },
    {
        id: 10,
        name: 'Café Volcan',
        price: '11200',
        description: 'Juan Valdez',
        stock: 5,
        img: 'https://www.juanvaldez.cl/cdn/shop/files/Volcan250molido.jpg?v=1725380514&width=713',
        category: 'molido',
        sizes: ['250gr']

    },
    {
        id: 11,
        name: 'Café Cumbre',
        price: '11200',
        description: 'Juan Valdez',
        stock: 5,
        img: 'https://www.juanvaldez.cl/cdn/shop/files/CafeCumbre250gr.jpg?v=1720100949&width=713',
        category: 'molido',
        sizes: ['250gr']

    },
    {
        id: 12,
        name: 'Café Organico',
        price: '11200',
        description: 'Juan Valdez',
        stock: 5,
        img: 'https://www.juanvaldez.cl/cdn/shop/files/EmpacadoOrganico283gr_molido.jpg?v=1720100945&width=713',
        category: 'molido',
        sizes: ['283gr']

    },

]
export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products);
        }, 1000);
    });
};

export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 1000);
    });
};

export const getProductByCategory = (category) => {
    return new Promise((res) => {
        const productosFiltrados = products.filter((product) => product.category === category);
        setTimeout(() => {
            res(productosFiltrados);
        }, 1000);
    });
};