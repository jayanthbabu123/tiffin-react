import React, { Component } from 'react'
import Component2 from './Component2';

export default class Component1 extends Component {
    render() {
        return (
            <div>
                <Component2  />
            </div>
        )
    }
}
