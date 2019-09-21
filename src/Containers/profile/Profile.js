import React, { Component } from 'react'
import Component1 from '../../Components/Component1';
import { ProfileProvider } from '../../context';
import MainDecorator from '../../Hoc/MainDecorator';

class Profile extends Component {

    state = {
        name: "jayanth",
        data: []
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => this.setState({ data: json }))
    }
    render() {
        return (
            <div>
                Profile
                <ProfileProvider value={this.state.data}>
                    <Component1 />
                </ProfileProvider>

            </div>
        )
    }
}

export default MainDecorator(Profile)
