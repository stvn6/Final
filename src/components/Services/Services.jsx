import React from 'react';
import { Link } from 'react-router-dom'; 
import img1 from "/grano1.png"
import img2 from "/molido3.png"
import img3 from "/liofilizado2.png"

const ServicesData = [
    {
        id: 1,
        img: img2,
        name: "Café Molido",
        link: "/category/molido",
        description: "Disfruta el sabor y aroma del café molido, listo para preparar en cada taza.",
        aosDelay: "100"
    },
    {
        id: 2,
        img: img1,
        name: "Café Grano",
        link: "/category/grano",
        description: "Descubre el auténtico aroma y frescura del café en grano. Perfecto para moler",
        aosDelay: "100"
    },
    {
        id: 3,
        img: img3,
        name: "Café Liofilizado",
        link: "/category/liofilizado",
        description: "Sabor instantáneo y auténtico en cada taza de café liofilizado",
        aosDelay: "100"
    },
]

const Services = () => {
    return (
        <>
            <span id="services"></span>
            <div className="py-10">
                <div className="container">
                    <div className="text-center mb-20">
                        <h1 className="text-4xl font-bold font-cursive text-gray-800">
                            Elige el mejor café para ti
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
                        {ServicesData.map((service) => (
                            <Link to={service.link} key={service.id}> {/* clickar en cada imagen lleve a la categoria */}
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay={service.aosDelay}
                                    className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
                                >
                                    <div className="h-[122px]">
                                        <img
                                            src={service.img}
                                            alt=""
                                            className="max-w-[200px] block mx-auto transform -translate-y-14
                                            group-hover:scale-105 group-hover:rotate-6 duration-300"
                                        />
                                    </div>
                                    <div className="p-4 text-center">
                                        <div className="w-full "></div>
                                        <h1 className="text-xl font-bold">{service.name}</h1>
                                        <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;