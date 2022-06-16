import React from "react";
import "../App.css";
import { Carousel, Container } from "react-bootstrap";

function Home() {
  return (
    <Container>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={require("../img/bild1.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../img/bild2.jpg")}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../img/bild3.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="fontstyle-1">
        <h1>Lorem</h1>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
        voluptate nam dolore vero ducimus assumenda ipsam aspernatur, facere
        beatae. Expedita amet sapiente, soluta iste quaerat maiores sed minima
        quos ipsum quia aut laudantium ducimus numquam tenetur aperiam mollitia
        laborum dolorum magni ipsam cum asperiores architecto aspernatur odit
        inventore. Cupiditate, ipsam.
      </p>
    </Container>
  );
}

export default Home;
