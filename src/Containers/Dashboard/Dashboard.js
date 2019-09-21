import React, { Component } from 'react';
import './dashboard.css';
// import Header from '../../Components/Header';
import { Header2 } from '../../Components/Header2'
import axios from 'axios';
import MainDecorator from '../../Hoc/MainDecorator';
let bookedorders = [];
class Dashboard extends Component {
    state = {
        tiffins: [],
        isClicked: false,
        orders: [],
        val: [],
        name: 'jayanth'
    }

    componentDidMount() {
        console.log('didmount');
        axios.get('https://api.myjson.com/bins/1e7kvf')
            .then(res => {
                this.setState({ tiffins: res.data.foods })
            })
        // fetch('https://api.myjson.com/bins/1e7kvf')
        //     .then(res => {
        //         return res.json()
        //     }).then(data => {
        //         this.setState({ tiffins: data.foods })
        //     })
    }
    handleClick = (val) => () => {
        bookedorders.push(val);
        console.log(val)
        this.setState({ isClicked: true, orders: bookedorders })
    }
    handleremove = () => {
        bookedorders = [];
        this.setState({
            isClicked: false,
            orders: []
        });
    }


    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className={this.state.isClicked ? 'col-md-8' : 'col-md-12'}>
                            <div className="row">
                                {this.state.tiffins.map(value => {
                                    return (
                                        <div className={this.state.isClicked ? 'col-md-4' : 'col-md-3'} onClick={this.handleClick(value)} key={value.name}>
                                            <div className="card border-primary mb-3">
                                                <div className="card-header">
                                                    {value.name}
                                                </div>
                                                <div className="card-body">
                                                    <h4>{value.cost}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                        {this.state.isClicked ? <div className="col-md-4">
                            <div className="table">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>name</th>
                                        <th><button onClick={this.handleremove}>X</button></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {this.state.orders.map((val, index) => {
                                        return (
                                            <tr>


                                                <td><p>{index + 1}</p></td>
                                                <td><p>{val.name}</p></td>

                                                {/* <button onClick ={this.handleRowDel(val)}>#</button> */}

                                            </tr>
                                        )
                                    })}

                                </tbody>


                            </div>
                        </div> : null}

                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default MainDecorator(Dashboard);
