import React from 'react';
import Card from 'react-bootstrap/Card';
import rainBackgroundAnimation from './assets/rainBackgroundAnimation.gif';
import './App.css';


class Description extends React.Component {

  render() {    
    return (
      <>
        <Card className="mx-auto text-center mt-2 border-1">
          <Card.Body  style={{ backgroundImage: `url(${rainBackgroundAnimation})`}}>
            <Card.Text style={{fontSize:`100%`, color:`yellow`}}>{this.props.text}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }


}

export default Description;