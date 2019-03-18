import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <Container>
         <Jumbotron>
           <h2>Welcome to Hold</h2>
           <p>this is where you will try Hold</p>
           <Link to="/about">
             <Button variant="primary">About</Button>
           </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="tominsk-wrapper">
            <Image src="assets/tominsk.jpg" circle className="tominsk-pic" />
            <h3>Greetings!</h3>
            <p>I'm Alex, and I would love to share some beautiful things with
            you.  Please try Hold!</p>
        </Col>
      </Row>

      </Container>
    )
  }
}
