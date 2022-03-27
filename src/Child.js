import { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    const increment = () => {
      this.setState((prevState) => {
        return prevState.count + 1;
      });
    };
    return;
  }
}
export default Child;
