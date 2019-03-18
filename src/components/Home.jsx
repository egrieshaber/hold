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
         </Jumbotron>
         <Link to="/about">
           <Button bsStyle="primary">About</Button>
           <Row></Row>
           <Col></Col>
           <Image></Image>
         </Link>
      </Container>
    )
  }
}
