import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../style-component/bienvenida.css";
import { FloatButton } from "antd"; // Importa FloatButton de antd
import { UpOutlined } from "@ant-design/icons"; // Importa el ícono UpOutlined
import Button from "@mui/material/Button";

const Bienvenida = () => {
  return (
    <div>
      <div className="container-bienvenida" id="home">
        <h1 className="titulo">Bienvenidos a Naturalmente Tucumán😋👌🏻</h1>
        <p className="subtitulo">
          Naturalmente es una tienda online de productos naturales y orgánicos.
        </p>
      </div>

      <section id="promos">
        <div className="container-card">
          <h2 className="destacado">Destacados</h2> <br />
          <CardGroup>
            <Card className="cartas">
              <Card.Img
                variant="top"
                src="src/assets/different-pills-herbs-flowers-on-260nw-2380501293.jpg"
              />
              <Card.Body>
                <Card.Title>Producto 1</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className="cartas">
              <Card.Img
                variant="top"
                src="src/assets/alimentos-dieteticos.jpg"
              />
              <Card.Body>
                <Card.Title>Producto 2</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className="cartas">
              <Card.Img
                variant="top"
                src="src/assets/alimentos-light-678x381.jpg"
              />
              <Card.Body>
                <Card.Title>Producto 3</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
      </section>

      <section id="productos">
        <div className="container-promos">
          <br />
          <h2 className="tipos">Tipos de productos</h2>
          <Row xs={1} md={4} className="g-4">
            {productos.map((producto) => (
              <Col key={producto.id}>
                <Card className="cartas">
                  <Card.Img variant="top" src={producto.imagen} />
                  <Card.Body>
                    <Card.Title>{producto.titulo}</Card.Title>
                    <Card.Text>{producto.descripcion}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div className="ver-catalogo">
          <button className="btn">
            <a href="/Catalogo">Ver más</a>
          </button>
        </div>
      </section>

      <section className="section-us" id="nosotros">
        <div className="container-nosotros">
          <br />
          <h2 className="us">Nosotros</h2>
          <div className="parrafo">
            <p>
              Somos una tienda online de productos naturales y orgánicos.
              Nuestro
            </p>
            <p>
              objetivo es brindar productos de calidad y al alcance de todos.
            </p>
            <p>Ubicados en Avellaneda 123 Concepción, Tucumán, Argentina.</p>
          </div>
        </div>
      </section>

      <section id="footer">
        <div className="container-footer">
          <footer>
            <p className="piso">
              &copy; 2025 Dietética. Todos los derechos reservados.
            </p>
          </footer>
        </div>
      </section>

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
    titulo: "Producto 1",
    descripcion: "Descripción del Producto 1.",
  },
  {
    id: 2,
    imagen:
      "https://www.elpincel.es/images/alimentacion-natural-saludable-vigo.jpg",
    titulo: "Producto 2",
    descripcion: "Descripción del Producto 2.",
  },
  {
    id: 3,
    imagen: "https://www.dieteticastomy.com.ar/content/img/productos/6.jpg",
    titulo: "Producto 3",
    descripcion: "Descripción del Producto 3.",
  },
  {
    id: 4,
    imagen:
      "https://cdn.pixabay.com/photo/2015/04/05/10/13/natural-products-707575_1280.jpg",
    titulo: "Producto 4",
    descripcion: "Descripción del Producto 4.",
  },
  {
    id: 5,
    imagen:
      "https://vocescriticas-s3.cdn.net.ar/s3i233/2023/06/vocescriticas/images/07/03/70385_6002d3364bf98660da11c52292e794f4bd2ef2fc182ccd107c829cfa92fba995/lg.webp",
    titulo: "Producto 5",
    descripcion: "Descripción del Producto 5.",
  },
  {
    id: 6,
    imagen:
      "https://irp-cdn.multiscreensite.com/b94848d4/MOBILE/jpg/851739-el-caldero-de-ix-hierbas.jpg",
    titulo: "Producto 6",
    descripcion: "Descripción del Producto 6.",
  },
  {
    id: 7,
    imagen:
      "https://previews.123rf.com/images/pepsee30/pepsee301509/pepsee30150900031/45834272-frutas-en-yogur-alimentos-saludables-productos-l%C3%A1cteos-alimentos-naturales-alimentos-diet%C3%A9ticos.jpg",
    titulo: "Producto 7",
    descripcion: "Descripción del Producto 7.",
  },
  {
    id: 8,
    imagen: "https://lacolegiala.com/cdn/shop/products/C7A4286-16_1445x.jpg",
    titulo: "Producto 8",
    descripcion: "Descripción del Producto 8.",
  },
];

export default Bienvenida;
