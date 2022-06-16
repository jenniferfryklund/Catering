// import react from "react";
import "./App.css";
import { Container, Button, Alert, Card, Row, Stack } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Catering from "./views/Catering";
import Contact from "./views/Contact";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      {/* <Container>
        <Stack gap={3}>
          <h1>blog</h1>

          <Row>
            <Card>
              <Card.Img />
              <Card.Title>Card example</Card.Title>¨
              <Card.Text>This is an example of react bootstrapp</Card.Text>
              <Button variant="primary mb-5 p-3">Test Button</Button>
            </Card>
            <Alert variant="success">This is a button</Alert>
            <Button>Test Button</Button>
          </Row>
        </Stack>
      </Container> */}
    </div>
  );
}

export default App;
