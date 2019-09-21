import React, { Component } from 'react'
import Component3 from './Component3';

export default class Component2 extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Component3  />
            </div>
        )
    }
}
