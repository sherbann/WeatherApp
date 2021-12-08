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
      timezone_offset: 0
    }
    this.apiClient = new ApiClient()
  }
  getSheffield() {
    this.fetchWeatherData(53.382969, -1.4659)
    //window.location.reload();

  }

  getHyderabad() {
    this.fetchWeatherData(17.38405, 78.45636)
    //window.location.reload();

  }
  getParis() {
    this.fetchWeatherData(48.864716, 2.349014)
    //window.location.reload();

  }
  getBarcelona() {
    this.fetchWeatherData(41.390205, 2.154007)
    //window.location.reload();

  }
  getTokyo() {
    this.fetchWeatherData(35.6895, 139.69171)
    //window.location.reload();

  }

  fetchWeatherData(lat = 53.0, lon = -1.4) {
    this.setState({
      loading: "....loading",
      fetching: true
    })

    this.apiClient.getWeather(lat, lon)
      .then((response) => { this.updateWeather(response.data.daily,response.data.timezone_offset) })
      .finally(() => {
        this.setState({
          loading: ""
        }, console.log(this.state.weather))
      })
  }

  updateWeather(response,timezone_offset) {
    this.setState({
      weather: response,
      timezone_offset: timezone_offset
    })
  }

  buildCards() {
    return this.state.weather.slice(1, 6).map((current, i) => (
      <Col key={i} lg>
        <CardGroup id="cardBackground">
          {console.log(current)}
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
          <Navbar collapseOnSelect variant="dark" id="Navbar" expand="lg" toggleButton>
            <Navbar.Brand id="NavBrand" >Weather Forecast {this.state.loading}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" fluid={true} />
            <Navbar.Collapse id="responsive-navbar-nav" type="button" data-toggle="collapse">
              <Nav  className="me-auto flex-container" id="cities">
                  <Nav.Link href="#" onClick={() => this.getSheffield()} >Sheffield</Nav.Link>
                  <Nav.Link href="#" onClick={() => this.getHyderabad()} >Hyderabad</Nav.Link>
                  <Nav.Link href="#" onClick={() => this.getParis()}>Paris</Nav.Link>
                  <Nav.Link href="#" onClick={() => this.getBarcelona()}>Barcelona</Nav.Link>
                  <Nav.Link href="#" onClick={() => this.getTokyo()}>Tokyo</Nav.Link>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
          <Today  state={this.state.curDT}/>
          <Row>
            {this.buildCards()}
          </Row>
        </Container>
    
      </>
    );
  }


}

export default App;
