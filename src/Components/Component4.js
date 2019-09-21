import React, { Component } from 'react'
import ProfileContext from '../context';

export default class Component4 extends Component {
    static contextType = ProfileContext;
    render() {
        console.log(this.context)
        return (
            <div>
                
            </div>
        )
    }
}

// Component4.contextType = ProfileContext;
