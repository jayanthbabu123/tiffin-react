import React, { Component } from 'react'

export default class Signup extends Component {
   constructor(){
       super();
       this.state={
           name:"jayanth"
       }
       console.log('constructor')
   }
   componentDidMount(){
       console.log('did mount');
   }
   changeName = ()=>{
       this.setState({name:"something"})
   }
   shouldComponentUpdate(prevData){
     console.log('should update');
     return true;
   }
   componentDidUpdate(){
       console.log('did update')
   }
    render() {
        console.log('render')
        return (
            <h1 className="container">
                {this.state.name}
                <button className="btn btn-primary" onClick={this.changeName}>Change name</button>
            </h1>
        )
    }
}
