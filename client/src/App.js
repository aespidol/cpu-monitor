import React, { Component } from 'react'
import './App.css'
import { Graph, Meter } from './components'
import { getCpuLoad } from './api/load'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      load: 0
    }
  }
  handleData = (data) => {
    console.log(data)
  }
  componentDidMount() {
    setInterval(()=>{
      getCpuLoad().then((res) => {
        this.setState(()=>({load: res.cpuLoad}))
      })
    }, 1000)
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Meter load={this.state.load} />
          <Graph load={this.state.load}/>
        </div>
      </div>
    );
  }
}

export default App;
