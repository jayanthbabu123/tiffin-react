import React, { Component } from 'react';
import Header from '../Components/Header';

const MainDecorator = (BaseComponent) => {
   return class HOC extends Component {
        render() {
            return (
                <>
                    <Header />
                    <BaseComponent />
                </>

            )
        }
    }
} 

export default MainDecorator;