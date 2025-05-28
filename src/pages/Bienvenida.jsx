import React from "react";
import Card from "react-bootstrap/Card"; // Se mantiene para la sección "Destacados"
import CardGroup from "react-bootstrap/CardGroup"; // Se mantiene para la sección "Destacados"
import { FloatButton } from "antd"; // Importa FloatButton de antd
import { UpOutlined } from "@ant-design/icons"; // Importa el ícono UpOutlined
import { Link } from "react-router";
import Socialbtn from "../components/Socialfooter.jsx";


const Bienvenida = () => {
  return (
    <div className="!bg-fondo">
      {/* Sección Hero */}
      <div className="!bg-[url(src/assets/Portada.png)] !bg-no-repeat !bg-cover !bg-center !h-60 !flex !flex-col !items-center !justify-center !text-center !p-6">
        <h1 className="!font-bold !mb-6 !animate-fadeIn !text-white !text-5xl">Bienvenidos a Naturalmente Tucumán</h1>
        <p className="!mx-auto !animate-fadeInUp !text-white !text-xl">
          Naturalmente es una tienda online de productos naturales y orgánicos.
        </p>
      </div>

      {/* Sección Destacados */}
      <section className="!py-12 !sm:py-16 !lg:py-20">
        <div className="!container !mx-auto !px-4 !sm:px-6 !lg:px-8">
          <h2 className="!text-3xl !sm:text-4xl !font-bold !text-center !text-gray-800 !mb-8 !sm:mb-12 !mt-4">Destacados</h2>
          {/* Usamos CardGroup de react-bootstrap. Tailwind se usa para el estilo individual de las Card. */}
          <CardGroup className="!flex !flex-wrap !justify-center !gap-6 "> {/* Añadido flex-wrap y justify-center para mejor responsividad con CardGroup */}
            <Card className="!m-3 !flex-grow !basis-full !sm:basis-1/2 !md:basis-1/3 !lg:basis-1/4 !max-w-sm !bg-white !rounded-xl !shadow-lg overflow-hidden transform hover:scale-105 !transition-transform !duration-200 !ease-in-out">
              <Card.Img
                variant="top"
                src="src/assets/AlimentosSinTacc.png"
                alt="Producto destacado 1"
              />
              <Card.Body className="p-5 !flex !flex-col !flex-grow">
                <Card.Title className="!text-center !font-semibold">Sin TACC</Card.Title>
                <Card.Text className="!text-center">
                  Una selección especial de nuestros productos más populares y recomendados por nuestros clientes.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="!m-3 !flex-grow !basis-full !sm:basis-1/2 !md:basis-1/3 !lg:basis-1/4 !max-w-sm !bg-white !rounded-xl !shadow-lg overflow-hidden transform hover:scale-105 !transition-transform !duration-200 !ease-in-out">
              <Card.Img
                variant="top"
                src="src/assets/NovedadSaludable.png"
                alt="Novedad saludable"
              />
              <Card.Body className="p-5 !flex !flex-col !flex-grow">
                <Card.Title className="!text-center !font-semibold">Novedad Saludable</Card.Title>
                <Card.Text className="!text-center">
                  Descubre la calidad y el sabor que nos caracteriza con estas ofertas imperdibles.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="!m-3 !flex-grow !basis-full !sm:basis-1/2 !md:basis-1/3 !lg:basis-1/4 !max-w-sm !bg-white !rounded-xl !shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200 ease-in-out">
              <Card.Img
                variant="top"
                src="src/assets/dieta.jpg"
                alt="Opción ligera"
                className="!w-full !h-48 !object-cover"
              />
              <Card.Body className="p-5 !flex !flex-col !flex-grow">
                <Card.Title className="!text-center !font-semibold">Opción Ligera</Card.Title>
                <Card.Text className="!text-center">
                  Ideales para complementar tu dieta y estilo de vida saludable sin sacrificar el sabor.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </section>

      {/* Sección Tipos de Productos (Refactorizada a Tailwind CSS) */}
      <section className="!py-12 !sm:py-16 !lg:py-20">
        <div className="!container !mx-auto !px-4 !sm:px-6 !lg:px-8">
          <h2 className="!text-3xl !sm:text-4xl !font-bold text-center !text-gray-800 !mb-10 !sm:mb-12">Tipos de productos</h2>
          <div className="!grid !grid-cols-4 !sm:grid-cols-2 !gap-6 ">
            {productos.map((producto) => (
              <div
                key={producto.id}
                className="!bg-white !rounded-xl !shadow-lg !overflow-hidden !transform hover:scale-105 !transition-transform !duration-300 !ease-in-out !flex !flex-col"
              >
                <img
                  src={producto.imagen}
                  alt={producto.titulo} // Atributo alt para accesibilidad
                  className="!w-full !h-48 !object-cover"
                />
                <div className="!p-5 !flex !flex-col !flex-grow"> {/* p-5 para padding, flex-grow para que el texto ocupe espacio */}
                  <h3 className="!text-xl !font-semibold !text-gray-800 !mb-2 !text-center">{producto.titulo}</h3>
                  <p className="!text-gray-600 !text-sm !text-center">{producto.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="!text-center !mt-10 !sm:mt-12">
          <Link
            to="/catalogo"
            className="inline-block !bg-green-600 !hover:bg-green-500 !text-white !font-semibold !py-3 !px-8 !rounded-lg !shadow-md !hover:shadow-lg !transition-all !duration-300 !transform hover:scale-105 !text-lg"
          >
            Ver Catálogo Completo
          </Link>
        </div>
      </section>

      {/* Sección Nosotros */}
      <section className="!bg-[url(./src/assets/dietetica.png)] !bg-no-repeat !bg-cover !bg-center !h-100 !py-12 !sm:py-16 !lg:py-20 !bg-green-500 !text-white">
        <div className="!container !mx-auto !px-4 !sm:px-6 !lg:px-8 !text-left !backdrop-blur-xs">
          <h2 className="!text-2xl !sm:text-4xl !font-bold !mb-6 !sm:mb-8">Nosotros</h2>
          <div className="!max-w-3xl !space-y-4 !text-lg !leading-relaxed">
            <p>Somos una tienda online apasionada por los productos naturales y orgánicos. Nuestro objetivo es brindarte opciones de calidad que contribuyan a tu bienestar y estén al alcance de todos.</p>
            <p>Creemos en el poder de la naturaleza para nutrir y cuidar nuestro cuerpo. Por eso, seleccionamos cuidadosamente cada artículo de nuestro catálogo.</p>
            <p>Nos encontramos en el corazón de Tucumán, listos para llevar lo mejor de la naturaleza a tu hogar. ¡Gracias por elegirnos!</p>
            <p className="!mt-4 !font-semibold">Ubicados en Avellaneda 123, Concepción, Tucumán, Argentina.</p>
          </div>
        </div>
      </section>

      {/* Sección Footer - Consistente con Catalogo.jsx */}
      <footer className="!bg-gray-800 !text-white !text-center !p-6 !mt-12">
        <p>&copy; {new Date().getFullYear()} Naturalmente Tucumán. Todos los derechos reservados.</p>
        <p className="!text-sm !mt-1">Descubre más sobre un estilo de vida saludable con nosotros.</p>
        
        <div>
        <Socialbtn />
        </div>
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
  );
};

const productos = [
  {
    id: 1,
    imagen:
      "https://farmacialavera.com/wp-content/uploads/2023/05/Productos-dieteticos-Farmacia-La-Vera.jpg",
    titulo: "Granos y Legumbres",
    descripcion: "Variedad de granos y legumbres para una dieta equilibrada y nutritiva.",
  },
  {
    id: 2,
    imagen:
      "https://www.elpincel.es/images/alimentacion-natural-saludable-vigo.jpg",
    titulo: "Semillas",
    descripcion: "Superalimentos llenos de nutrientes esenciales como chía, lino y girasol.",
  },
  {
    id: 3,
    imagen: "https://www.dieteticastomy.com.ar/content/img/productos/6.jpg",
    titulo: "Frutos Secos y Desecados",
    descripcion: "Snacks saludables y energéticos, perfectos para cualquier momento del día.",
  },
  {
    id: 4,
    imagen:
      "https://cdn.pixabay.com/photo/2015/04/05/10/13/natural-products-707575_1280.jpg",
    titulo: "Sin TACC",
    descripcion: "Amplia gama de opciones aptas para celíacos, sin gluten y deliciosas.",
  },
  {
    id: 5,
    imagen:
      "https://vocescriticas-s3.cdn.net.ar/s3i233/2023/06/vocescriticas/images/07/03/70385_6002d3364bf98660da11c52292e794f4bd2ef2fc182ccd107c829cfa92fba995/lg.webp",
    titulo: "Infusiones y Tés",
    descripcion: "Selección de tés e infusiones aromáticas para relajarte y disfrutar.",
  },
  {
    id: 6,
    imagen:
      "https://irp-cdn.multiscreensite.com/b94848d4/MOBILE/jpg/851739-el-caldero-de-ix-hierbas.jpg",
    titulo: "Hierbas Medicinales",
    descripcion: "Remedios naturales ancestrales para el cuidado integral de tu salud.",
  },
  {
    id: 7,
    imagen:
      "https://previews.123rf.com/images/pepsee30/pepsee301509/pepsee30150900031/45834272-frutas-en-yogur-alimentos-saludables-productos-l%C3%A1cteos-alimentos-naturales-alimentos-diet%C3%A9ticos.jpg",
    titulo: "Suplementos Naturales",
    descripcion: "Complementa tu nutrición con nuestra línea de suplementos orgánicos.",
  },
  {
    id: 8,
    imagen: "https://lacolegiala.com/cdn/shop/products/C7A4286-16_1445x.jpg",
    titulo: "Aceites y Endulzantes",
    descripcion: "Alternativas saludables para cocinar y endulzar tus comidas diarias.",
  },
];

export default Bienvenida;
