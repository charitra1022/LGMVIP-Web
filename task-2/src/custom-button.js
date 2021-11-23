import { Component } from "react";
import { Button } from "react-bootstrap";

class CustomButton extends Component {
  constructor(props) {
    super();

    this.state = {
      name: props.name,
      clickHandler: props.clickHandler,
    };
  }

  render() {
    const { name, clickHandler } = this.state;
    const btn = (
      <Button
        className="nav-btn"
        variant="primary"
        onClick={() => clickHandler(name)}
      >
        {name}
      </Button>
    );
    return btn;
  }
}

export default CustomButton;
