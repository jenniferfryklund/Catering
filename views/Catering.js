import React from "react";
import "../App.css";
import {
  Container,
  Card,
  Button,
  Divider,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap";

function Catering() {
  return (
    <Container>
      <div className="mt-5 mb-5 fontstyle-1">
        <h2>Smörgåstårta</h2>
      </div>
      <Row>
        <div className="mb-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            fugiat cupiditate ducimus porro facere alias. Animi obcaecati libero
            iusto numquam ratione! Non error esse officiis eligendi porro
            necessitatibus dignissimos facilis. Quasi debitis, nobis libero
            maxime eligendi quae voluptas. In impedit totam accusamus ullam
            voluptatibus praesentium vel alias consectetur nisi numquam.
          </p>
        </div>
      </Row>

      <Row>
        <Col>
          <h4 className="fontstyle-1">Smörgåstårta 10 personer</h4>

          <ListGroup variant="flush">
            <ListGroup.Item>
              <h6>Smörgåstårta med räkor</h6>
              <Col>
                <Button>Lägg till</Button>
              </Col>
              <p>Ingredienser:</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  <h6>Smörgåstårta med skinka</h6>
                </Col>
                <Col>
                  <Button>Lägg till</Button>
                </Col>
              </Row>
              <p>Ingredienser:</p>
            </ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col></Col>

        <Col>
          <Card border="secondary" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Header>Beställning</Card.Header>
              <Card.Text>Varukorgen är tom!</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Catering;
