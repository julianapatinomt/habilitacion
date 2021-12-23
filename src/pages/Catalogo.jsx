import { useState } from "react";
import { Container, Row, Col, Form,Card } from "react-bootstrap";
import Filtro from "../components/Filtro";
function cambiarFiltro(e, setFiltro) {
  let valor = e.target.value;
  setFiltro(valor);
}
function Catalogo() {
  const [filtro, setFiltro] = useState("");
  const [productos, setProductos] = useState([]);
  return (
    <Container fluid>
      <Row>
        <h1>Catálogo de productos</h1>
        <h3>Consulte nuestros productos</h3>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Seleccione filtro</Form.Label>
              <Form.Select onChange={(e) => cambiarFiltro(e, setFiltro)}>
                <option value="" disabled>
                  Seleccione filtro
                </option>
                <option value="description">Descripción</option>
                <option value="price">Precio</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Filtro filtro={filtro}></Filtro>
        </Col>
      </Row>
      <Row>
        {productos.length > 0 ? (
          productos.map((producto, index) => (
            <Col key={index}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={producto.photography} />
                <Card.Body>
                  <Card.Title>{producto.nombre}</Card.Title>
                  <Card.Subtitle>{producto.category}</Card.Subtitle>
                  <Card.Text>
                    <p>{producto.description}</p>
                    <p><b>Precio:</b>{producto.price}</p> 
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>No hay productos para mostrar</Col>
        )}
      </Row>
    </Container>
  );
}
export default Catalogo;
