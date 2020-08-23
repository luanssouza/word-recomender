import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './error.css';

export class Error extends Component {

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.history.push('/');
    }

    render() {
        return (
            <div className="error">
                <h1 className="sorry">Sorry, something went wrong with our servers. Please restart the experiment.</h1>
                <Button variant="primary" onClick={this.handleSubmit}>Restart</Button>
            </div>
        )
    }
}

export default Error