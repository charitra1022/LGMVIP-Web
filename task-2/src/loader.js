import { Spinner } from "react-bootstrap";
import { Component } from "react";

class LoaderComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="loader-container">
        <Spinner className="loader" animation="border" role="status">
          <span className="visually-hidden">Loading clients...</span>
        </Spinner>
      </div>
    );
  }
}

export default LoaderComponent;
