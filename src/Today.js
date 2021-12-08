import React from 'react';
import logo from './logo.svg';
import './App.css';

class Today extends React.Component {
    state = {
        curDT: new Date().toLocaleString(),
    }
    render() {
        return (
            <div className="date" >
                <p id="Today">Current Date And Time : {this.state.curDT}</p>
            </div>
        );
    }
}

export default Today;