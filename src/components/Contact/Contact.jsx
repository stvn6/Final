export default function ContactPage() {
    return (
        <div className="container mx-auto max-w-[1170px] my-12">
            <h1 className="text-4xl font-bold text-center mb-12">Contactanos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Nombre</label>
                            <input
                                type="text"
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-primary"
                                placeholder="Tu nombre"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Apellido</label>
                            <input
                                type="text"
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-primary"
                                placeholder="Tu apellido"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Correo electrónico</label>
                            <input
                                type="email"
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-primary"
                                placeholder="tuemail@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Mensaje</label>
                            <textarea
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-primary"
                                rows="4"
                                placeholder="Escribe tu mensaje aquí..."
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="bg-primary text-white py-3 px-6 rounded-lg shadow hover:bg-primary-dark transition duration-200"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Juan Valdez Café</h2>
                    <p className="text-gray-700 mb-4">Avenida Principal 123</p>
                    <p className="text-gray-700 mb-4">Castro, Chile</p>
                    <p className="text-gray-700 mb-4">Teléfono: +56 9 68425671</p>
                    <p className="text-gray-700 mb-4">Correo: contacto@juanvaldezcafe.com</p>
                    <p className="text-gray-700">
                        Horarios: <br />
                        Lunes a Viernes: 8:00 AM - 6:00 PM <br />
                        Sábados: 9:00 AM - 3:00 PM
                    </p>
                </div>
            </div>
        </div>
    );
}
