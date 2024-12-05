import React from "react";

const ContactPage =() =>{
    return(
        <div className="flex justify-center items-center w-[100%] h-[60vh]">
        <div className="max-w-md w-full mx-auto p-6 bg-gray-600 rounded-lg shadow-md">
            <h2 className="text-3xl text-center text-white font-bold mb-6">Contactanos</h2>
            <form action="">
                <div className="mb-4">
                    <label className="block text-white text-sm font-semibold mb-4 " htmlFor="">Tu Nombre</label>
                    <input placeholder="Pedro" className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500" required type="texto" />
                </div>
                <div>
                    <label className="block text-white text-sm font-semibold mb-4" htmlFor="">Tu Correo Electronico</label>
                    <input placeholder="Pedro@ejemplo.com" className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500" required type="email" />
                </div>
                <div>
                    <label className="block text-white text-sm font-semibold mb-4" htmlFor="">Tu mensaje</label>
                    <textarea rows='4' placeholder="Escribe tu mensaje" className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500" required type="texto" />
                </div>
                <div className="flex justify-center ">
                    <button type="submit" className="bg-primary text-white font-semibold px-4 py-2 rounded-lg hover:bg-primary focus:outline-white ">Enviar Mensaje</button>
                </div>
            </form>
        </div>
        </div>
    )
}
export default ContactPage