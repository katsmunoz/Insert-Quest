import React, { Component } from "react";
import data from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, CardDeck, Card } from "react-bootstrap";
import "./MenuData.css";

class MenuData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
    };
  }

  render() {
    return (this.props.items || []).map((item, i) => {
      return (
        <CardDeck className="card-deck">
          <Card>
            <Card.Body>
              <Card.Title key={i}>{item.name}</Card.Title>
              <Card.Text>{item.price}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                onClick={() => this.props.onPurcharse(item)}
                className="btn-card"
              >
                Añadir
              </Button>
            </Card.Footer>
          </Card>
        </CardDeck>
      );
    });
  }
}
export default MenuData;
