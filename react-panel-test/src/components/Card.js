/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Card extends React.Component {
  render() {
    // return <h2>Component works, son.</h2>;
    return(
      <Card bg="secondary" text="white" style={{ width: '25rem', height: '25rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body />
      </Card>
    )
  }

}

export default Card;
