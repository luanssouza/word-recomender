import React, { Component } from 'react'
import { Jumbotron, Form, Button, Row, Col, Image } from 'react-bootstrap';
import testeImg from '../ExplanationRate/teste.jpg';

export class ExplanationCompare extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            movies: [ 
                { 
                    justifyA: "Schizophrenic housewife, engulfed by terrorizing apparitions, kills off each, unknowing if these demons are merely figments of her hallucinatory imagination or part of reality.", 
                    justifyB: "Schizophrenic housewife, engulfed by terrorizing apparitions, kills off each, unknowing if these demons are merely figments of her hallucinatory imagination or part of reality.", 
                    title: "Images (1972)",
                    rec: 0, 
                    qualiA: 0, 
                    qualiB: 0, 
                    wordsA: 0, 
                    wordsB: 0,
                    recComments: "",
                    jusComments: "", 
                },
                { 
                    justifyA: "Schizophrenic housewife, engulfed by terrorizing apparitions, kills off each, unknowing if these demons are merely figments of her hallucinatory imagination or part of reality.", 
                    justifyB: "Schizophrenic housewife, engulfed by terrorizing apparitions, kills off each, unknowing if these demons are merely figments of her hallucinatory imagination or part of reality.", 
                    title: "Images (1972)",
                    rec: 0, 
                    qualiA: 0, 
                    qualiB: 0, 
                    wordsA: 0, 
                    wordsB: 0,
                    recComments: "",
                    jusComments: "", 
                },
            ], 
        };
    }

    handleChangeRec = (event, index) => {
        let aux = this.state.movies;
        aux[index].rec = event.target.value;
        this.setState({ movies: aux  });
    }

    handleChangeQualiA = (event, index) => {
        let aux = this.state.movies;
        aux[index].qualiA = event.target.value;
        this.setState({ movies: aux  });
    }

    handleChangeQualiB = (event, index) => {
        let aux = this.state.movies;
        aux[index].qualiB = event.target.value;
        this.setState({ movies: aux  });
    }

    handleChangeWordsA = (event, index) => {
        let aux = this.state.movies;
        aux[index].wordsA = event.target.value;
        this.setState({ movies: aux  });
    }

    handleChangeWordsB = (event, index) => {
        let aux = this.state.movies;
        aux[index].wordsB = event.target.value;
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

    handlerFinish = (event) => {
        event.preventDefault();
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                {
                    this.state.movies.map( (movie, index) => (
                        <Jumbotron key={index}>
                            <Row className="mb-4">
                                <Col xs={12} md={4}>
                                    <h2><b>Justification A:</b></h2>
                                    <p> { movie.justifyA } </p>
                                </Col>
                                <Col xs={12} md={4} className="text-center">
                                    <h2><b> { movie.title } </b></h2>
                                    <Image src={testeImg} className="m-2"/>
                                </Col>
                                <Col xs={12} md={4}>
                                    <h2><b>Justification B:</b></h2>
                                    <p> { movie.justifyB } </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={6}>
                                    <Form.Group controlId="rec">
                                        <Form.Label>Recommendation quality:</Form.Label>
                                        <Form.Control type="range"  min="0" max="10" value={movie.rec} onChange={ (e)=> this.handleChangeRec(e, index)} />
                                    </Form.Group>
                                    <Form.Group controlId="qualiA">
                                        <Form.Label>Quality of justification A:</Form.Label>
                                        <Form.Control type="range"  min="0" max="10" value={movie.qualiA} onChange={ (e)=> this.handleChangeQualiA(e, index)} />
                                    </Form.Group>

                                    <Form.Group controlId="qualiB">
                                        <Form.Label>Quality of justification B:</Form.Label>
                                        <Form.Control type="range"  min="0" max="10" value={movie.qualiB} onChange={ (e)=> this.handleChangeQualiB(e, index)} />
                                    </Form.Group>

                                    <Form.Group controlId="wordsA">
                                        <Form.Label>Quality of the words of justification A:</Form.Label>
                                        <Form.Control type="range"  min="0" max="10" value={movie.wordsA} onChange={ (e)=> this.handleChangeWordsA(e, index)} />
                                    </Form.Group>
                                    <Form.Group controlId="wordsB">
                                        <Form.Label>Quality of the words of justification B:</Form.Label>
                                        <Form.Control type="range"  min="0" max="10" value={movie.wordsB} onChange={ (e)=> this.handleChangeWordsB(e, index)} />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Group controlId="recComments">
                                        <Form.Label>Comments on the Recommendation:</Form.Label>
                                        <Form.Control as="textarea" rows="4" value={movie.recComments} onChange={ (e)=> this.handleChangeRecComments(e, index)} />
                                    </Form.Group>
                                    <Form.Group controlId="jusComments">
                                        <Form.Label>Comments on the Justification:</Form.Label>
                                        <Form.Control as="textarea" rows="4" value={movie.jusComments} onChange={ (e)=> this.handleChangeJusComments(e, index)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Jumbotron>
                    ))
                }
                <Button variant="primary" className="float-md-right" onClick={this.handlerFinish}>Finish</Button>
            </div>
        )
    }
}

export default ExplanationCompare