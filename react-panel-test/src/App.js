import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import './App.css'
// import '../public/logo192'
function App() {
  return (
    <div>
      <Row
        style={{
          marginTop: 10,
          marginLeft: 10
        }}
      >
        <Col xs={0}>
          <Card
            bg="dark"
            text="white"
            style={{ width: '28rem', height: '28rem' }}
          >
            <Card.Body>Passenger Camera Feed</Card.Body>
            <Card.Img variant="top" src={require('./logo.svg')} />
          </Card>
        </Col>

        <Col>
          <Card
            bg="dark"
            text="white"
            style={{ width: '28rem', height: '28rem' }}
          >
            <Card.Body>Front Camera Feed</Card.Body>
            <Card.Img variant="top" src={require('./logo.svg')} />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default App
