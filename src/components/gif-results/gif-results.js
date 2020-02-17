import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Client from "../../services/client";

export class GifResults extends React.Component {
  constructor(props) {
    super(props);
    this.client = Client;
    this.state = {
      gifs: null
    };
    this.notifyData = this.notifyData.bind(this);
  }

  componentWillMount() {
    this.client.on("DATA RECEIVED", this.notifyData);
  }
  notifyData() {
    this.setState({ gifs: this.client.eventEmitter.response });
    console.log(this.state.gifs);
  }

  render() {
    const results = this.state.gifs;
    return results ? (
      <Row>
        <Col md={12}>
          <h4 className="font-weight-bold">Fetched {results.length} results</h4>
        </Col>
        {results.map((result, index) => {
          return (
            <Col key={index} md={3}>
              <Card>
                <Card.Img
                  variant="top"
                  src={result.images.downsized_still.url}
                />
                <Card.Body>
                  <Card.Text>{result.title}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    ) : (
      <div></div>
    );
  }
}
