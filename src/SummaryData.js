import React from 'react';
import moment from 'moment';
import Table from 'react-bootstrap/Table';

class SummaryData extends React.Component {




  render() {


    /*console.log(this.props.sset);*/
    return (
      <>
        <Table striped bordered hover size="sm" >
          <thead style={{fontSize:`100%`}}>
            <tr>
              <th colSpan="2"><sup>o</sup>C</th>
              <th>W</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.max}</td>
              <td>{this.props.min}</td>
              <td>{this.props.wind}</td>
            </tr>
          </tbody>
        </Table>
        <Table striped bordered hover size="xs">
          <thead>
            <tr><th>Sunrise</th><th>Sunset</th></tr>
            <tr></tr>
          </thead>
          <tbody >
            <tr><td>{moment((parseInt(this.props.srise) + parseInt(this.props.timezone_offset)) * 1000).format('HH:mm')}</td>
              <td>{moment((parseInt(this.props.sset) + parseInt(this.props.timezone_offset)) * 1000).format('HH:mm')}</td></tr>
          </tbody>
        </Table>
      </>
    );
  }


}

export default SummaryData;