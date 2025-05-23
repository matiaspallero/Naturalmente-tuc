import React from 'react';
import '../style-component/catalogo.css'; // Importamos el CSS para estilos personalizados

function Catalogo() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-green-600 text-white p-6 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center">Nuestro Catálogo de Productos Dietéticos</h1>
          <p className="text-center mt-2">Encuentra los mejores productos naturales y orgánicos para tu bienestar.</p>
        </div>
      </header>

      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productosDieteticos.map((producto) => (
            <div key={producto.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <img 
                className="w-full h-56 object-cover" 
                src={producto.imagenUrl} 
                alt={producto.nombre} 
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{producto.nombre}</h2>
                <p className="text-gray-600 text-sm mb-3 h-20 overflow-y-auto">{producto.descripcion}</p>
                <p className="text-2xl font-bold text-green-500 mb-4">{producto.precio}</p>
                <button className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                  Añadir al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center p-6 mt-12">
        <p>&copy; {new Date().getFullYear()} Naturalmente Tucumán. Todos los derechos reservados.</p>
        <p className="text-sm mt-1">Descubre más en nuestras redes sociales.</p>
      </footer>
    </div>
  )
}

// Datos de ejemplo para los productos. En una aplicación real, esto vendría de una API.
const productosDieteticos = [
  {
    id: 1,
    nombre: "Mix de Frutos Secos Energético",
    descripcion: "Una mezcla premium de almendras, nueces, castañas y pasas. Ideal para un boost de energía y snacks saludables.",
    precio: "1200 ARS",
    imagenUrl: "src/assets/FrutosSecosMix.png",
    categoria: "Frutos Secos"
  },
  {
    id: 2,
    nombre: "Aceite de Coco Orgánico",
    descripcion: "Prensado en frío, virgen extra. Perfecto para cocinar de forma saludable o para el cuidado personal natural.",
    precio: "950 ARS",
    imagenUrl: "src/assets/Aceite de Coco Orgánico.png",
    categoria: "Aceites y Grasas Saludables"
  },
  {
    id: 3,
    nombre: "Harina de Almendras",
    descripcion: "Alternativa sin gluten para repostería y panadería. Rica en proteínas y baja en carbohidratos.",
    precio: "800 ARS",
    imagenUrl: "src/assets/Harina de Almendras.png",
    categoria: "Harinas y Cereales"
  },
  {
    id: 4,
    nombre: "Semillas de Chía Orgánicas",
    descripcion: "Fuente de Omega-3, fibra y antioxidantes. Añádelas a tus batidos, yogures o para hacer pudding de chía.",
    precio: "450 ARS",
    imagenUrl: "src/assets/Semillas de Chía Orgánicas.png",
    categoria: "Semillas"
  },
  {
    id: 5,
    nombre: "Té Verde Matcha en Polvo",
    descripcion: "Té verde japonés de alta calidad, rico en antioxidantes y L-teanina. Ideal para ceremonias o lattes.",
    precio: "1500 ARS",
    imagenUrl: "src/assets/Té Verde Matcha en Polvo.png",
    categoria: "Infusiones"
  },
  {
    id: 6,
    nombre: "Barritas de Cereal Sin Azúcar",
    descripcion: "Snack saludable y práctico para llevar, endulzadas naturalmente y llenas de fibra y nutrientes.",
    precio: "600 ARS",
    imagenUrl: "src/assets/Barritas de Cereal Sin Azúcar.png",
    categoria: "Snacks Saludables"
  }
];

export default Catalogo;
