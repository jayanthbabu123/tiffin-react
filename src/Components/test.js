import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Test extends Component {
    handleChange = () => {
     this.props.changeName('jayanth')
    }
    render() {
        // console.log(this.props);

        return (
            <div>
                Hi
                {this.props.name} {this.props.age}
                <button onClick={this.handleChange}>click</button>
            </div>
        )
    }
}

Test.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
}


