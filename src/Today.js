import React from 'react';
import './App.css';

class Today extends React.Component {
    state = {
        curDT: new Date().toLocaleString(),
    }
    render() {
        return (
            <div className="date" >
                <p id="Today" style={{ fontSize: `120%`}}>Current Date And Time : {this.state.curDT}</p>
            </div>
        );
    }
}

export default Today;