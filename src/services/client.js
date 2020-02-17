import EventEmitter from "eventemitter3";
import { apiCall } from "./api-call";

class Client {
  constructor() {
    this.eventEmitter = new EventEmitter();
    this.response = null;
  }

  on(eventName, listener) {
    this.eventEmitter.on(eventName, listener);
  }
  apiCall(eventName) {
    this.eventEmitter.on(eventName, this.sendQuery);
  }

  sendQuery(response) {
    apiCall(response).then(success => {
      this.response = success["data"];
      this.emit("DATA RECEIVED");
    });
  }

  receiveResponse(eventName, query) {
    this.eventEmitter.emit(eventName, query);
    console.log(this.eventEmitter);
  }

  removeEventListener(eventName, listener) {
    this.eventEmitter.removeListener(eventName, listener);
  }

  emit(event, payload, error = false) {
    this.eventEmitter.emit(event, payload, error);
  }
  getEventEmitter() {
    return this.eventEmitter;
  }
}

let _client = new Client();

export default _client;
