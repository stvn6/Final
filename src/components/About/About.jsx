import React from "react";
import { FaLeaf, FaHandshake, FaAward, FaCoffee } from "react-icons/fa";
import cosecha from '/cosecha.jpg'
export default function AboutPage() {
    const values = [
        {
            icon: <FaCoffee className="text-primary text-4xl" />,
            title: "Pasión por el Café",
            description: "Juan Valdez representa el esfuerzo de miles de caficultores colombianos que producen café 100% premium con técnicas sostenibles y tradicionales.",
        },
        {
            icon: <FaHandshake className="text-primary text-4xl" />,
            title: "Compromiso Social",
            description: "Nuestra misión es apoyar directamente a los caficultores colombianos, garantizando un precio justo y promoviendo el desarrollo de sus comunidades.",
        },
        {
            icon: <FaLeaf className="text-primary text-4xl" />,
            title: "Sostenibilidad",
            description: "En Juan Valdez nos esforzamos por proteger el medio ambiente a través de prácticas agrícolas responsables y empaques ecológicos.",
        },
        {
            icon: <FaAward className="text-primary text-4xl" />,
            title: "Calidad Inigualable",
            description: "Cada grano de café es seleccionado y procesado con dedicación, garantizando una experiencia única en cada taza.",
        },
    ];

    return (
        <div className="container mx-auto max-w-[1170px] my-12">
            {/* Introducción */}
            <section className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Acerca de Nosotros</h1>
                <p className="text-lg text-gray-600">
                    En <span className="text-primary font-semibold">Juan Valdez Café</span>, rendimos homenaje al café colombiano y a quienes lo hacen posible: los caficultores. Nuestro compromiso es ofrecer la mejor calidad mientras impulsamos el desarrollo sostenible y social de nuestras comunidades.
                </p>
            </section>

            {/* Historia */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
                <div>
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Nuestra Historia</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Desde 1959, <span className="font-bold text-primary">Juan Valdez Café</span> ha sido el símbolo del café colombiano en todo el mundo. Representamos a más de 500,000 familias caficultoras que trabajan arduamente para producir un café único, reconocido por su calidad y sabor excepcionales.
                    </p>
                </div>
                <div>
                    <img
                        src={cosecha}
                        alt="Historia de Juan Valdez"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </section>

            {/* Valores */}
            <section className="mb-16">
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">Nuestros Valores</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="text-center bg-white p-6 rounded-lg shadow-lg">
                            <div className="mb-4">{value.icon}</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                            <p className="text-gray-600">{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
