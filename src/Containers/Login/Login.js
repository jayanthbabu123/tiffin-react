import React, { Component, } from 'react'

import Header from '../../Components/Header';


export default class Login extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        date: '',
        radio: '',

    }



    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.username === 'jaya' && this.state.password === "1234") {
            this.props.history.push('/dashboard')
        }

    }
    render() {
        return (
            <div>
                <Header name="login" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <h3>Login</h3>
                            <form>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} className="form-control" placeholder="Enter username" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Enter password" />
                                </div>
                                <div className="form-group">
                                    <label>date</label>
                                    <input type="date" name="date" value={this.state.date} onChange={this.handleChange} className="form-control" placeholder="Enter date" />
                                </div>
                                <div className="form-group">
                                    <label>gender</label>
                                    <div >
                                        <input type="radio" onChange={this.handleChange} name="radio" value="MALe" /> Male

                                      <input type="radio" onChange={this.handleChange} name="radio" value="FEMALE" /> Female
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" onClick={this.handleSubmit} className="btn btn-outline-success">Submit</button>
                                  
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
