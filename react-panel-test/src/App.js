import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import './App.css'

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
              style={{ width: '32rem', height: '18rem' }}
            >
              <Card.Header>Passenger Feed</Card.Header>
            </Card>
          </Col>

          <Col>
            <Card
              bg="dark"
              text="white"
              style={{ width: '32rem', height: '18rem' }}
            >
              <Card.Header>Front Camera Feed</Card.Header>
            </Card>
          </Col>
        </Row>
      </div>
  )
}

export default App
