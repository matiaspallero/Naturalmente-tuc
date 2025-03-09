import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "../style-component/bienvenida.css";

const Bienvenida = () => {
  return (
    <div>
      <h1 className="titulo">Bienvenidos a Naturalmente</h1>
      <p>
        Naturalmente es una tienda online de productos naturales y orgánicos.
      </p>

      <div className="container-card">
        <CardGroup>
          <Card className="cartas">
            <Card.Img variant="top" src="src/assets/different-pills-herbs-flowers-on-260nw-2380501293.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
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
            <Card.Img variant="top" src="src/assets/alimentos-dieteticos.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
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
            <Card.Img variant="top" src="src/assets/alimentos-light-678x381.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>

      <div className="container-promos">

      </div>
    </div>
  );
};

export default Bienvenida;
