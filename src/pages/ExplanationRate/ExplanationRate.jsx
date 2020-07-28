import React, { Component } from 'react'
import { Jumbotron, Form, Button, Row, Col, Image } from 'react-bootstrap';
import testeImg from './teste.jpg';

export class ExplanationRate extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            movies: [ 
                { 
                    title: "Images (1972)", 
                    justify: "Schizophrenic housewife, engulfed by terrorizing apparitions, kills off each, unknowing if these demons are merely figments of her hallucinatory imagination or part of reality.",
                    recommendation: 0, 
                    transparency: 0, 
                    surprise: 0,
                    recComments: "",
                    jusComments: "", 
                },
                { 
                    title: "Images (1972)", 
                    justify: "Schizophrenic housewife, engulfed by terrorizing apparitions, kills off each, unknowing if these demons are merely figments of her hallucinatory imagination or part of reality.",
                    recommendation: 0, 
                    transparency: 0, 
                    surprise: 0,
                    recComments: "",
                    jusComments: "", 
                },
                { 
                    title: "Images (1972)", 
                    justify: "Schizophrenic housewife, engulfed by terrorizing apparitions, kills off each, unknowing if these demons are merely figments of her hallucinatory imagination or part of reality.",
                    recommendation: 0, 
                    transparency: 0, 
                    surprise: 0,
                    recComments: "",
                    jusComments: "", 
                },
            ]
        };

        this.handlerNext = this.handlerNext.bind(this);
    }

    
    handleChangeRecommendation = (event, index) => {
        let aux = this.state.movies;
        aux[index].recommendation = event.target.value;
        this.setState({ movies: aux  });
    }

    handleChangeTransparency = (event, index) => {
        let aux = this.state.movies;
        aux[index].transparency = event.target.value;
        this.setState({ movies: aux  });
    }

    handleChangeSurprise = (event, index) => {
        let aux = this.state.movies;
        aux[index].surprise = event.target.value;
        this.setState({ movies: aux  });
    }

    handleChangeRecComments = (event, index) => {
        let aux = this.state.movies;
        aux[index].recComments = event.target.value;
        this.setState({ movies: aux  });
    }

    handleChangeJusComments = (event, index) => {
        let aux = this.state.movies;
        aux[index].jusComments = event.target.value;
        this.setState({ movies: aux  });
    }

    handleChangeRecComments = (event, index) => {
        let aux = this.state.movies;
        aux[index].recComments = event.target.value;
        this.setState({ movies: aux  });
    }

    handlerNext(event) {
        event.preventDefault();

        this.props.history.push('/explanationCompare');
    }

    render() {
        return (
            <div>
                {
                    this.state.movies.map( (movie, index) => (
                        <Jumbotron key={index}>
                            <Row className="mb-4">
                                <Col xs={12} md={3} className="text-center">
                                    <Image src={testeImg} className="m-2"/>
                                </Col>
                                <Col xs={12} md={9}>
                                    <h1><b>{ movie.title }</b></h1>
                                    <p> { movie.justify } </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={6}>
                                    <Form.Group controlId="recommendation">
                                        <Form.Label>Recommendation quality:</Form.Label>
                                        <Form.Control type="range"  min="0" max="10" value={movie.recommendation} onChange={ (e)=> this.handleChangeRecommendation(e, index)} />
                                    </Form.Group>
                                    <Form.Group controlId="transparency">
                                        <Form.Label>Transparency:</Form.Label>
                                        <Form.Control type="range"  min="0" max="10" value={movie.transparency} onChange={ (e)=> this.handleChangeTransparency(e, index)} />
                                    </Form.Group>

                                    <Form.Group controlId="surprise">
                                        <Form.Label>Surprise:</Form.Label>
                                        <Form.Control type="range"  min="0" max="10" value={movie.surprise} onChange={ (e)=> this.handleChangeSurprise(e, index)} />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Group controlId="recComments">
                                        <Form.Label>Comments on the Recommendation:</Form.Label>
                                        <Form.Control as="textarea" rows="2" value={movie.recComments} onChange={ (e)=> this.handleChangeRecComments(e, index)} />
                                    </Form.Group>
                                    <Form.Group controlId="jusComments">
                                        <Form.Label>Comments on the Justification:</Form.Label>
                                        <Form.Control as="textarea" rows="2" value={movie.jusComments} onChange={ (e)=> this.handleChangeJusComments(e, index)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Jumbotron>
                    ))
                }
                <Button variant="primary" className="float-md-right" onClick={this.handlerNext}>Next</Button>
            </div>
        )
    }
}

export default ExplanationRate