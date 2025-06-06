import React from 'react';
import { FloatButton } from "antd"; // Importa FloatButton de antd
import { UpOutlined } from "@ant-design/icons"; // Importa el ícono UpOutlined
import Socialbtn from "../components/Socialfooter.jsx";


function Catalogo() {
  return (
    <div className="!bg-fondo !min-h-screen !p-*">
      <div className="bg-[url(src/assets/portada2.png)] bg-no-repeat bg-cover bg-center h-52 flex flex-col items-center justify-center text-center p-6"> {/* Asumiendo h-52 (13rem) o ajusta h-50 si es una clase personalizada */}
        <h1 className="!font-bold !mb-6 !animate-fadeIn text-white !text-3xl !sm:text-4xl">Les presentamos nuestros productos</h1>
        <p className="!mx-auto animate-fadeInUp text-white text-xl sm:text-2xl">
          Con los mejores precios!!
        </p>
      </div>

      <main className="!container !mx-auto p-4 sm:p-6 lg:p-8">
        {/* Ajustado para un comportamiento responsive estándar: 1 col en xs, 2 en sm, 3 en md, 4 en lg */}
        <div className="!grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 !mt-8">
          {productosDieteticos.map((producto) => (
            <div key={producto.id} className="bg-white rounded-xl !shadow-lg overflow-hidden transform hover:scale-101 transition-transform duration-300 ease-in-out flex flex-col"> {/* Añadido flex flex-col para mejor manejo de altura interna */}
              <img
                className="!w-full !h-56 !object-cover"
                src={producto.imagenUrl}
                alt={producto.nombre}
              />
              <div className="!p-5">
                <h2 className="!text-xl !font-semibold !text-gray-800 !mb-2 !text-center">{producto.nombre}</h2>
                <p className="!text-gray-600 !text-sm !mb-3 !h-20 !overflow-y-auto !text-center ">{producto.descripcion}</p>
                <p className="text-2xl font-bold text-green-500 text-center no-underline">{producto.precio}</p>
                <button className="w-full font-bold py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-green-600 hover:text-white mt-auto"> {/* Añadido mt-auto para empujar el botón abajo si la card es flex */}
                  Añadir al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>          !
      </main>

      <footer className="bg-gray-800 text-white text-center !p-6 !mt-12">
        <p>&copy; {new Date().getFullYear()} Naturalmente Tucumán. Todos los derechos reservados.</p>
        <p className="text-sm mt-1">Descubre más en nuestras redes sociales.</p>
        
        <div>
        <Socialbtn />
        </div>
      </footer>

      <FloatButton.BackTop
          icon={<UpOutlined />}
          className="!bg-[#28c147] !border-[#1890ff] !text-white" // Clases de Tailwind
          visibilityHeight={100}
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
