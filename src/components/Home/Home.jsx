import React from 'react';
import HomeImg from "/coffee2.png"
import Services from "../Services/Services.jsx";
const Home = () => {
    return (
        <div>
        <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
            <div className="container pb-8 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* text content section */}
                    <div
                        className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                        <h1
                            data-aos="fade-up" data-aos-once="true" className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                            Tenemos el mejor{" "}
                            <span
                                data-aos="zoom-out"
                                data-aos-delay="300"
                                className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90 font-cursive">
                                Café
                            </span>{" "}
                            del país
                        </h1>
                        <div data-aos="fade-up" data-aos-delay="400">
                        </div>
                    </div>
                    {/*image section*/}
                    <div className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative">
                        <img src={HomeImg} alt=""  className="w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin" />

                    </div>
                </div>
            </div>
        </div>
            <Services></Services>
    </div>
    )
}
export default Home;