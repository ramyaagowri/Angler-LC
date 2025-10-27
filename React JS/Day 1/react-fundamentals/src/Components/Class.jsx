import React from "react";

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 }; //initial
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <p>Increment with Class Component : {this.state.count}</p>
        <p>
          <button onClick={() => this.increment()}>Increment</button>
        </p>
      </div>
    );
  }
}
