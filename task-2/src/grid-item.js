import { Component } from "react";
import { Card, Col } from "react-bootstrap";

class GridItem extends Component {
  constructor(props) {
    super();

    this.state = {
      data: props.person,
    };
  }

  render() {
    const { data } = this.state;

    const name = data.first_name + " " + data.last_name;
    const email = "mailto:" + data.email;

    return (
      <Col xs={12} md={4}>
        <Card className="person-data">
          <Card.Img variant="top" src={data.avatar} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Link href={email}>{data.email}</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default GridItem;
