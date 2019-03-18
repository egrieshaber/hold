import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Image src="assets/hold.jpg" className="hold-pic" rounded />
         <Jumbotron>
           <h2>Welcome to Hold</h2>
           <p>this is where you will try Hold</p>
           <Link to="/about">
             <Button variant="primary">About</Button>
           </Link>
        </Jumbotron>
      </Container>
    )
  }
}
