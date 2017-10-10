import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts'

class Graph extends Component {
    constructor(props){
        super()
        this.state = {
            data: [
                {name: 0, uv: 0},
            ]
        }
    }
    componentWillReceiveProps(nextProps) {
        let time = this.state.data[this.state.data.length-1].name
        let data = [...this.state.data, {name: time+1, uv: nextProps.load}]
        if(data.length > 9){
            data.shift()
        }
        var newState = {
            data: data
        }
        this.setState(()=>{
            return newState
        })
    }
    
    render() {
        return (
            <div>
                <h1>CPU Load Graph</h1>
                <LineChart width={600} height={300} data={this.state.data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
                <p>Time(s)</p>
            </div>
        );
    }
}

Graph.propTypes ={
    load: PropTypes.number.isRequired
}

export default Graph;