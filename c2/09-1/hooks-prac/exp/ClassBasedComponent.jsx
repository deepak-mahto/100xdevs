import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.incrementCount}>Increase</button>
      </div>
    );
  }
}

export default App;
