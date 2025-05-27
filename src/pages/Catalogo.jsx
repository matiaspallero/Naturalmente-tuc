import React from 'react';
import '../style-component/catalogo.css'; // Importamos el CSS para estilos personalizados
import { FloatButton } from "antd"; // Importa FloatButton de antd
import { UpOutlined } from "@ant-design/icons"; // Importa el ícono UpOutlined


function Catalogo() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div id="home" className="bg-[url(src/assets/portada2.png)] bg-no-repeat bg-cover bg-center h-50 flex flex-col items-center justify-center text-center p-6">
        <h1 id="titulo" className="font-bold mb-6 animate-fadeIn text-white">Les presentamos nuestros productos</h1>
        <p id="subtitulo" className="mx-auto animate-fadeInUp text-white">
          Con los mejores precios!!
        </p>
      </div>

      <main id="productos" className="container mx-auto p-4 sm:p-6 lg:p-8">
        {/* Ajustado para un comportamiento responsive estándar: 1 col en xs, 2 en sm, 3 en md, 4 en lg */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productosDieteticos.map((producto) => (
            <div key={producto.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <img
                className="w-full h-56 object-cover"
                src={producto.imagenUrl}
                alt={producto.nombre}
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">{producto.nombre}</h2>
                <p className="text-gray-600 text-sm mb-3 h-20 overflow-y-auto text-center ">{producto.descripcion}</p>
                <p id="precio" className="justify-between text-2xl font-bold text-green-500 no-underline hover:underline">{producto.precio}
                <button className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                  Añadir al Carrito
                </button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center p-6 mt-12">
        <p>&copy; {new Date().getFullYear()} Naturalmente Tucumán. Todos los derechos reservados.</p>
        <p className="text-sm mt-1">Descubre más en nuestras redes sociales.</p>
      </footer>
      
      <FloatButton.BackTop
        icon={<UpOutlined />}
        style={{
          backgroundColor: "#28c147", // Color de fondo verde
          borderColor: "#0b4e27", // Color del borde
          color: "#fff", // Color del ícono
        }}
        visibilityHeight={200} // Se muestra después de desplazarse 200px
      />
    </div>
  )
}

// Datos de ejemplo para los productos. En una aplicación real, esto vendría de una API.
const productosDieteticos = [
  {
    id: 1,
    nombre: "Mix de Frutos Secos Energético",
    descripcion: "Una mezcla premium de almendras, nueces, castañas y pasas. Ideal para un boost de energía y snacks saludables.",
    precio: "$ 1200",
    imagenUrl: "src/assets/FrutosSecosMix.png",
    categoria: "Frutos Secos"
  },
  {
    id: 2,
    nombre: "Aceite de Coco Orgánico",
    descripcion: "Prensado en frío, virgen extra. Perfecto para cocinar de forma saludable o para el cuidado personal natural.",
    precio: "$ 950",
    imagenUrl: "src/assets/Aceite de Coco Orgánico.png",
    categoria: "Aceites y Grasas Saludables"
  },
  {
    id: 3,
    nombre: "Harina de Almendras",
    descripcion: "Alternativa sin gluten para repostería y panadería. Rica en proteínas y baja en carbohidratos.",
    precio: "$ 800",
    imagenUrl: "src/assets/Harina de Almendras.png",
    categoria: "Harinas y Cereales"
  },
  {
    id: 4,
    nombre: "Semillas de Chía Orgánicas",
    descripcion: "Fuente de Omega-3, fibra y antioxidantes. Añádelas a tus batidos, yogures o para hacer pudding de chía.",
    precio: "$ 450",
    imagenUrl: "src/assets/Semillas de Chía Orgánicas.png",
    categoria: "Semillas"
  },
  {
    id: 5,
    nombre: "Té Verde Matcha en Polvo",
    descripcion: "Té verde japonés de alta calidad, rico en antioxidantes y L-teanina. Ideal para ceremonias o lattes.",
    precio: "$ 1500",
    imagenUrl: "src/assets/Té Verde Matcha en Polvo.png",
    categoria: "Infusiones"
  },
  {
    id: 6,
    nombre: "Barritas de Cereal Sin Azúcar",
    descripcion: "Snack saludable y práctico para llevar, endulzadas naturalmente y llenas de fibra y nutrientes.",
    precio: "$ 600",
    imagenUrl: "src/assets/Barritas de Cereal Sin Azúcar.png",
    categoria: "Snacks Saludables"
  }
];

export default Catalogo;
