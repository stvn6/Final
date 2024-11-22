import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import FooterBg from '/cafefooter4.webp';

const FooterLinks = [
    {
        title: 'Home',
        link: "/#"
    },
    {
        title: 'Products',
        link: "/products",
    },
    {
        title: 'About',
        link: "/about",
    },
]

const bgImage = {
    backgroundImage: `url(${FooterBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "300px",
    width: "100%",
};

const Footer = () => {
    return (
        <div style={bgImage} className="text-white ">
            <div className="bg-black/40 min-h-[300px]">
                <div className="container grid md:grid-cols-3 pb-20 pt-5">
                    {/*COMPANY DETAILS*/}
                    <div className="py-8 px-4">
                        <a href="#" className="font-semibold tracking-wider text-2xl sm:text-3xl font-cursive">Juan Valdez</a>
                        <p className="pt-4 ">
                            Disfruta del mejor cafe de pais, momentos inolvidables - Tu escape perfecto.
                        </p>
                        <a href="https://www.youtube.com/JuanValdezChile" target="_blank" className="inline-block bg-[#3d2517] py-2 px-4 mt-5 text-sm rounded-full">Visita nuestro canal de Youtube</a>
                    </div>
                    {/*Footer links*/}
                    <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
                        {/*Primera columna links*/}
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-semibold sm:text-left mb-3">Footer Links</h1>
                            <ul className="space-y-3 ">
                                {FooterLinks.map((data, index) => (
                                        <li key={index}>
                                            <a href={data.link}
                                            className="inline-block hover:scale-105 duration-200"
                                            >{data.title}</a>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        {/*Segunda columna links*/}
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-semibold sm:text-left mb-3">Links Rapidos</h1>
                            <ul className="space-y-3 ">
                                {FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link}
                                           className="inline-block hover:scale-105 duration-200"
                                        >{data.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/*Informacion de compañia Footer*/}
                        <div className="py-8 px-4 col-span-2 sm:col-auto">
                            <h1 className="text-xl font-semibold sm:text-left mb-3">Dirección</h1>
                            <div>
                                <p className="mb-3">Castro, Chiloe, Chile</p>
                                <p>+569 6842567</p>
                                {/*Social Links*/}
                                <div className="space-x-3 mt-6 ">
                                    <a href="#">
                                        <FaFacebook className="text-3xl inline-block hover:scale-105 duration-200"/>
                                    </a>
                                    <a href="#">
                                        <FaInstagram className="text-3xl inline-block hover:scale-105 duration-200"/>
                                    </a>
                                    <a href="#">
                                        <FaTwitter className="text-3xl inline-block hover:scale-105 duration-200"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;