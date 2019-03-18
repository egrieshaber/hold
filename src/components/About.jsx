import React, { Component } from 'react'
import { Container, Col, Image } from 'react-bootstrap';
import './About.css'

export default class About extends Component {
  render() {
    return (
      <div>
        <Container>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/tominsk.jpg" className="tominsk-pic" rounded />
          </Col>
          <h3>Greetings!</h3>
            <p>My name is Alex and I would love to share some beautiful things
              with you.</p>
            <p>Please try Hold!</p>
        </Container>
      </div>
    )
  }
}
