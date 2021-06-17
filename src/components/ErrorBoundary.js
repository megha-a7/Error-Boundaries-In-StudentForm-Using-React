import React, { Component } from 'react';
import {sendError} from '../error-config';

export default class ErrorBoundary extends Component {

    state = {
        hasError: false
      };
    
      componentDidCatch(error, info){
        this.setState({hasError: true});
        sendError.captureException(error, {extra: info});
        //everytime the erroeboundary catches any error information about the error gets sent over to the error tracking services dashboard.
      }


    render(){

        if (this.state.hasError){
            return <h2>Oh no! Something went wrong.</h2>
        }
        return this.props.children;
       
        
    }
}