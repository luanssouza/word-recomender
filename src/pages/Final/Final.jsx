import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export class Final extends Component {

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.history.push('/');
    }

    render() {
        return (
            <div className="text-center">
                <h1>Thank you for participating in our survey!</h1>
                <Button variant="primary" onClick={this.handleSubmit}>Restart</Button>
            </div>
        )
    }
}

export default Final
