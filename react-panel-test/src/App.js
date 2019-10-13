import React from 'react'
import {
  Card,
  Row,
  Col,
  CardDeck,
  Button,
  InputGroup,
  FormControl
} from 'react-bootstrap'
import './App.css'
// import '../public/logo192'
function App() {
  return (
    <div style={{ backgroundColor: '#232931' }}>
      <Row
        style={{
          marginTop: 10,
          marginLeft: 10,
          position: 'relative'
        }}
      >
        <CardDeck>
          <Col xs={0}>
            <Card
              bg="dark"
              text="white"
              style={{ width: '25rem', height: '25rem' }}
            >
              <Card.Body as="h5">Passenger Camera Feed</Card.Body>
              <Card.Img variant="top" src={require('./logo.svg')} />
            </Card>
          </Col>

          <Col xs={0}>
            <Card
              bg="dark"
              text="white"
              style={{ width: '25rem', height: '25rem' }}
            >
              <Card.Body as="h5">Front Camera Feed</Card.Body>
              <Card.Img variant="top" src={require('./logo.svg')} />
            </Card>
          </Col>

          <Col xs={0}>
            <Card
              bg="dark"
              text="white"
              style={{ width: '50rem', height: '25rem' }}
            >
              <Card.Header as="h5">Logs</Card.Header> {/* mock data */}
              <Card.Body>
                <em>Madison Union</em>
              </Card.Body>
              <Card.Body>
                <em>ISAT/CS</em>
              </Card.Body>
              <Card.Body>
                <em>Madison Union</em>
              </Card.Body>
              <Card.Body>
                <em>Madison Union</em>
              </Card.Body>
              <Card.Body>
                <em>Lakeview Hall</em>
              </Card.Body>
            </Card>
          </Col>
        </CardDeck>
      </Row>

      <Row
        style={{
          marginTop: 10,
          marginLeft: 10,
          position: 'relative'
        }}
      >
        <CardDeck>
          <Col xs={0}>
            <Card
              text="white"
              style={{ backgroundColor: '#393e46', width: '25rem' }}
            >
              <Card.Header as="h5" style={{ backgroundColor: '#0ecca3' }}>
                In Queue
              </Card.Header>
              <Card.Header as="h5" style={{ backgroundColor: '#4ecca3' }}>
                Idle
              </Card.Header>
              <Card.Header as="h5" style={{ backgroundColor: '#393e46' }}>
                User Id:
              </Card.Header>
              <Card.Header as="h5" style={{ backgroundColor: '#393e46' }}>
                Cart Id:
              </Card.Header>
              <Card.Footer>GPS User:</Card.Footer>
              <Card.Footer>GPS Cart:</Card.Footer>
            </Card>
          </Col>

          <Col xs={0}>
            <Card
              text="white"
              style={{ backgroundColor: '#393e46', width: '25rem' }}
            >
              <Card.Header as="h5" style={{ backgroundColor: '#4ecca3' }}>
                Message Cart
              </Card.Header>
              <InputGroup style={{ backgroundColord: '#393e46' }}>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-lg">
                    Message
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  aria-label="Message"
                  aria-describedby="inputGroup-sizing-lg"
                />
              </InputGroup>
            </Card>

            <Card
              text="white"
              style={{ backgroundColor: '#393e46', width: '25rem' }}
            >
              <Card.Header as="h5" style={{ backgroundColor: '#4ecca3' }}>
                Send ROS command
              </Card.Header>
              <InputGroup style={{ backgroundColord: '#393e46' }}>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-lg">
                    ROS command
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  aria-label="Ros"
                  aria-describedby="inputGroup-sizing-lg"
                />
              </InputGroup>
            </Card>
          </Col>

          <Col xs={0}>
          <Card style={{ backgroundColor: '#393e46', width: '25rem' }}>
              <Button
                as="input"
                type="button"
                value="STOP"
                size="lg"
                variant="dark"
                style={{
                  backgroundColor: '#DC143C',
                  height: '5rem',
                  fontSize: '20px'
                }}
              />
            </Card>
            <Card style={{ backgroundColor: '#393e46', width: '25rem' }}>
              <Button
                as="input"
                type="button"
                value="RESUME"
                size="lg"
                variant="dark"
                style={{
                  backgroundColor: '#4ecca3',
                  height: '5rem',
                  fontSize: '20px'
                }}
              />
            </Card>
          </Col>
        </CardDeck>
      </Row>
    </div>
  )
}

export default App
