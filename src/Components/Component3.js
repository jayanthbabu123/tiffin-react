import React, { Component } from 'react'
import Component4 from './Component4';
import ProfileContext from '../context';

export default class Component3 extends Component {
    render() {
        console.log(this.context)
        return (
            <div>
                <Component4 />
            </div>
        )
    }
}

Component3.contextType = ProfileContext;
