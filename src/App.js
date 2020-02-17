import React from "react";
import { SearchBar } from "./components/search-bar/search-bar";
import { GifResults } from "./components/gif-results/gif-results";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={8}>
            <SearchBar />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <GifResults />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
