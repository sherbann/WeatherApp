import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import SummaryData from './SummaryData';
import Description from './Description'
import './App.css';
import rainBackgroundAnimation from './assets/rainBackgroundAnimation.gif';



class Scard extends React.Component {


  render() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const day = new Date(parseInt(this.props.dateString) * 1000);
    const nameDay = days[day.getDay(day)]
    const month = months[day.getMonth(day)]
    const date = day.getDate(day)
    const image = `http://openweathermap.org/img/wn/${this.props.img}@2x.png`
    const video = './assets/rain-background-animation.gif'
    const maxTemp = Math.round(this.props.max, 1)
    const minTemp = Math.round(this.props.min, 1)
    const windSpeed = Math.round(this.props.wind, 1)
    const dataKey = this.props.dateString + "data"
    
    let sunSet = new Date();
    if(this.props.sset !== undefined)
      sunSet = new Date(parseFloat() * 1000)
    let sunRise = new Date();
    if (this.props.srise !== undefined)
      sunRise = new Date(parseFloat() * 1000)


    return (
      <>
      
          <Card className="mx-auto text-center mt-2" style={{backgroundImage:`url(${rainBackgroundAnimation})`}}>
            <Card.Header className="cardHeader" id="cardHeader" as="h5">{nameDay}{"-"}{date}{"-"}{month}</Card.Header>
            <Image className="mx-auto responsive-image" src={image} alt={this.props.alt} />
            <Card.Body className="mx-auto text-center mt-2 border-1 cardBody">
              <Description text={this.props.text} />
              <SummaryData key={dataKey} max={maxTemp} min={minTemp} wind={windSpeed}
              srise={this.props.srise} sset={this.props.sset} timezone_offset={this.props.timezone_offset} />
            </Card.Body>
          </Card>
      </>
    );
  }


}

export default Scard;