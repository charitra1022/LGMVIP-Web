import { Component } from "react";
import {Card} from 'react-bootstrap';

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
      <Card className='person-data'>
        <Card.Img variant='top' src={data.avatar} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Link href={email}>{data.email}</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

export default GridItem;
