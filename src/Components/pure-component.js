import React, { Component,PureComponent } from 'react'

export default class Pure extends PureComponent {
    constructor(){
        super();
        this.state = {
            counter: 0
        }
    }
    
    componentDidMount(){
      setInterval(()=>{
         this.setState({counter: 0})
      }, 1000)
      console.log(this.props.name)
    }
    render() {
        return (
            <h1>
              {this.state.counter}
              <div>{this.props.name}</div>
            </h1>
        )
    }
}
