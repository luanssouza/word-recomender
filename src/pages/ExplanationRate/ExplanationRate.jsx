import React, { Component } from 'react'
import { Jumbotron, Button, Row, Col, Image } from 'react-bootstrap';
import testeImg from './teste.jpg';

export class ExplanationRate extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            movies: [ 
                { title: "Images (1972)", justify: "Schizophrenic housewife, engulfed by terrorizing apparitions, kills off each, unknowing if these demons are merely figments of her hallucinatory imagination or part of reality." },
                { title: "Images (1972)", justify: "Schizophrenic housewife, engulfed by terrorizing apparitions, kills off each, unknowing if these demons are merely figments of her hallucinatory imagination or part of reality." },
                { title: "Images (1972)", justify: "Schizophrenic housewife, engulfed by terrorizing apparitions, kills off each, unknowing if these demons are merely figments of her hallucinatory imagination or part of reality." }
            ]
            , rate: {} 
        };

        this.handlerNext = this.handlerNext.bind(this);
    }

    handlerNext(event) {
        event.preventDefault();

        this.props.history.push('/explanationCompare');
    }

    render() {
        return (
            <div>
                {
                    this.state.movies.map( (movie) => (
                        <Jumbotron>
                            <Row className="mb-4">
                                <Col xs={12} md={3} className="text-center">
                                    <Image src={testeImg} className="m-2"/>
                                </Col>
                                <Col xs={12} md={9}>
                                    <h1>{ movie.title }</h1>
                                    <p> { movie.justify } </p>
                                </Col>
                            </Row>
                            <Button variant="primary" className="float-md-right">Rate</Button>
                        </Jumbotron>
                    ))
                }
                <Button variant="primary" className="float-md-right" onClick={this.handlerNext}>Next</Button>
            </div>
        )
    }
}

export default ExplanationRate