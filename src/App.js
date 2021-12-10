import React from 'react';
import Scard from './scard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import CardGroup from 'react-bootstrap/CardGroup';
import { ApiClient } from './ApiClient'
import Today from './Today'
import rainBackgroundAnimation from './assets/rainBackgroundAnimation.gif';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: "",
      weather: [],
      timezone_offset: 0,
      location: "Sheffield"
    }
    this.apiClient = new ApiClient()
  }


  getSheffield() {
    this.fetchWeatherData(53.382969, -1.4659,"Sheffield")
    //window.location.reload();

  }
    //*retrieving <Card> form from Scard.js with values from API
  getHyderabad() {
    this.fetchWeatherData(17.38405, 78.45636,"Hyderabad")
    //window.location.reload();

  }
  getParis() {
    this.fetchWeatherData(48.864716, 2.349014,"Paris")
    //window.location.reload();

  }
  getBarcelona() {
    this.fetchWeatherData(41.390205, 2.154007,"Barcelona")
    //window.location.reload();

  }
  getTokyo() {
    this.fetchWeatherData(35.6895, 139.69171,"Tokyo")
    //window.location.reload();

  }

  fetchWeatherData(lat, lon ,location) {
    this.setState({
      loading: "....loading",
      fetching: true,
      location: location
    })

    this.apiClient.getWeather(lat, lon)
      .then((response) => { this.updateWeather(response.data.daily,response.data.timezone_offset,location) })
      .finally(() => {
        this.setState({
          loading: ""
        }, console.log(this.state.weather))
      })
  }

  updateWeather(response,timezone_offset,location) {
    this.setState({
      weather: response,
      timezone_offset: timezone_offset,
      location: location,
    })
  }

  buildCards() {
    return this.state.weather.slice(1, 9).map((current, i) => (
      <Col key={i} lg>
        <CardGroup id="cardGroup">
          {console.log(current)}
          {/*retrieving <Card> form from Scard.js with values from API*/}
          <Scard dateString={current.dt} img={current.weather[0].icon} alt={current.weather[0].description}
            text={current.weather[0].description} max={current.temp.max} min={current.temp.min}
            wind={current.wind_speed} sset={current.sunset} srise={current.sunrise} timezone_offset={this.state.timezone_offset} />
        </CardGroup>
      </Col>

    )
    )
  }

  componentDidMount() {
    this.fetchWeatherData()

  }

  render() {
    return (
      <>
      
        <Container className="flex-container" id="container" style={{ backgroundImage: `url(${rainBackgroundAnimation})`}} >
          <Navbar collapseOnSelect="true" class="fluid" variant="dark" id="Navbar" expand="md" type="toggleButton">
            <Navbar.Brand className="font-weight-bold" id="NavBrand">Weather Forecast {this.state.loading}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" aria-expanded="false" className="navbar-toggler" id="navbar-toggler"/>
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav" type="button" data-toggle="collapse">
              <Nav  className="me-auto flex-container fit-content" id="cities">
                <Nav.Link className="main-nav" style={this.state.location=="Sheffield"?{color: "yellow"}:{}} onClick={() => this.getSheffield()}>Sheffield</Nav.Link>
                <Nav.Link className="main-nav" style={this.state.location == "Hyderabad" ? { color: "yellow" } : {}} onClick={() => this.getHyderabad()} >Hyderabad</Nav.Link>
                <Nav.Link className="main-nav" style={this.state.location == "Paris" ? { color: "yellow"}:{}} onClick={() => this.getParis()}>Paris</Nav.Link>
                <Nav.Link className="main-nav" style={this.state.location == "Barcelona" ? { color: "yellow" } : {}} onClick={() => this.getBarcelona()}>Barcelona</Nav.Link>
                <Nav.Link className="main-nav" style={this.state.location == "Tokyo" ? { color: "yellow" } : {}} onClick={() => this.getTokyo()}>Tokyo</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Today  state={this.state.curDT}/>
         
          <Row className="row-gap row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
            {this.buildCards()}
          </Row>
        </Container>
       
      </>
    );
  }


}

export default App;
