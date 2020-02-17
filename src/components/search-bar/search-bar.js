import React from "react";
// { AppStore } = require("../../store/app-store");
import Client from "../../services/client";
import { Button, InputGroup, FormControl } from "react-bootstrap";

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.searchBtn = this.searchBtn.bind(this);
    this.client = Client;
  }
  componentWillMount() {
    this.client.apiCall("CALL API");
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  searchBtn(event) {
    event.preventDefault();
    this.client.receiveResponse("CALL API", this.state.query);
    console.log(this.client);
  }

  render() {
    return (
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search Gifs"
          aria-label="Search Gifs"
          aria-describedby="basic-addon2"
          name="query"
          onChange={e => this.handleChange(e)}
        />
        <InputGroup.Append>
          <Button onClick={e => this.searchBtn(e)} variant="outline-secondary">
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    );
  }
}
