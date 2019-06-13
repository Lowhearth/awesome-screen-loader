import React from "react";
import myWorker from "./test.worker";

export default class AwesomeLoader extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }
  componentDidMount() {
    const worker = new myWorker();
    console.log("starting socket");
    setInterval(worker.postMessage(this.state.counter), 100);
    worker.addEventListener("message", event => {
      console.log("got msg");
    });
  }
  render() {
    return (
      <div>
        <canvas />
      </div>
    );
  }
}
