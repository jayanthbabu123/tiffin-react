"use strict";

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Components/Header';
import Pure from '../../Components/pure-component';
import Test from '../../Components/test';
import Axios from 'axios';

export default class Home extends Component {
    constructor() {
        super();
        console.log('constructor')
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            console.log(res.data)
        })
    }

    postUser = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
    }
    render() {
        console.log('render')
        return (
            <div>
                <Header name="home" />

                <button className="btn btn-primary" onClick={this.postUser}>Post</button>

            </div>
        )
    }
}
