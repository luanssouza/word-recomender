import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';

export class ExplanationCompare extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            movie: { justifyA: "I'm the justification A", justifyB: "I'm the justification B" }, 
            prefer: 0, 
            clareza: 0, 
            confianca: 0, 
            descoberta: 0
        };
    }

    handleChangePrefer = (event) => this.setState({ prefer: event.target.value });

    handleChangeClareza = (event) => this.setState({ clareza: event.target.value });

    handleChangeConfianca = (event) => this.setState({ confianca: event.target.value });

    handleChangeDescoberta = (event) => this.setState({ descoberta: event.target.value });

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.rate)
        this.props.history.push('/');
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="prefer">
                    <Form.Label className="float-left">Jutification A</Form.Label>
                    <Form.Label className="float-right">Jutification B</Form.Label>
                    <Form.Control type="range"  min="-10" max="10" value={this.state.prefer} onChange={this.handleChangePrefer} />
                </Form.Group>

                <Form.Group controlId="clareza">
                    <Form.Label className="float-left">Jutification A</Form.Label>
                    <Form.Label className="float-right">Jutification B</Form.Label>
                    <Form.Control type="range"  min="-10" max="10" value={this.state.clareza} onChange={this.handleChangeClareza} />
                </Form.Group>

                <Form.Group controlId="confianca">
                    <Form.Label className="float-left">Jutification A</Form.Label>
                    <Form.Label className="float-right">Jutification B</Form.Label>
                    <Form.Control type="range"  min="-10" max="10" value={this.state.confianca} onChange={this.handleChangeConfianca} />
                </Form.Group>

                <Form.Group controlId="descoberta">
                    <Form.Label className="float-left">Jutification A</Form.Label>
                    <Form.Label className="float-right">Jutification B</Form.Label>
                    <Form.Control type="range"  min="-10" max="10" value={this.state.descoberta} onChange={this.handleChangeDescoberta} />
                </Form.Group>

                <Button className="float-lg-right" as="input" type="submit" value="Finish" />
            </Form>
        )
    }
}

export default ExplanationCompare