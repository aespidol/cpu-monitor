import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Meter extends Component {
    moveMeter = (nxt) => {
        let rotate = Math.floor(180*(nxt.load/100))
        let line = document.getElementById("line")
        line.style.transform = `rotate(${rotate}deg)`  
    }
    componentWillReceiveProps(nextProps) {
        this.moveMeter(nextProps)
    }
    render() {
        return (
            <div>
                <h1>CPU Load Meter</h1>
                <div className="circle">
                    <p>E</p>
                    <div id="line" onClick={this.moveMeter}></div>
                    <div className="center-dot"></div>
                    <p>F</p>
                </div>
            </div>
        );
    }
}

Meter.propTypes = {
    load: PropTypes.number.isRequired
};

export default Meter;