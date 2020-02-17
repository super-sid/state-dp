const EventEmitter = require("events");

class AppStore extends EventEmitter {
  constructor() {
    this.state = {
      searchResult: null,
      displayResults: false
    };
  }
  callApi(query) {
    this.state.inputQuery = query;
    this.state.status = "CallingAPI";
    this.emit("CallingAPI", this.state.inputQuery);
  }
  receiveResponse(response) {
    this.state.displayResults = true;
    this.state.searchResult = response;
    this.emit("CallingAPI", this.state.inputQuery);
  }
}
