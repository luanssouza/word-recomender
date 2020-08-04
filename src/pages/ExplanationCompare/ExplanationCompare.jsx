import React, { Component } from 'react'
import { Jumbotron, Form, Button, Row, Col, Image } from 'react-bootstrap';
import './explanationcompare.css'
import testeImg from '../ExplanationRate/teste.jpg';

export class ExplanationCompare extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            movies: [ 
                { 
                    justifyA: "Because you rated well the movie \"Stand By Me\" (1986), watch \"Air Bud\" (1997)", 
                    justifyB: "Because you rated well the movie \"Stand By Me\" (1986) described with the word \"friend\", watch \"Air Bud\" (1997) described with the similar word \"buddy\"", 
                    title: "Air Bud (1997)",
                    quality: 5, 
                    transp: 5, 
                    engage: 5, 
                    recComments: "",
                    jusComments: "", 
                },
                { 
                    justifyA: "Because you rated well the movie \"Stand By Me\" (1986), watch \"Air Bud\" (1997)", 
                    justifyB: "Because you rated well the movie \"Stand By Me\" (1986) described with the word \"friend\", watch \"Air Bud\" (1997) described with the similar word \"buddy\"", 
                    title: "Air Bud (1997)",
                    quality: 5, 
                    transp: 5, 
                    engage: 5, 
                    recComments: "",
                    jusComments: "", 
                },
                { 
                    justifyA: "Because you rated well the movie \"Stand By Me\" (1986), watch \"Air Bud\" (1997)", 
                    justifyB: "Because you rated well the movie \"Stand By Me\" (1986) described with the word \"friend\", watch \"Air Bud\" (1997) described with the similar word \"buddy\"", 
                    title: "Air Bud (1997)",
                    quality: 5, 
                    transp: 5, 
                    engage: 5, 
                    recComments: "",
                    jusComments: "", 
                }
            ], 
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleChangeQuality = (event, index) => {
        let aux = this.state.movies;
        aux[index].quality = event.target.value;
        this.setState({ movies: aux  });
    }

    handleChangeTransp = (event, index) => {
        let aux = this.state.movies;
        aux[index].transp = event.target.value;
        this.setState({ movies: aux  });
    }

    handleChangeEngag = (event, index) => {
        let aux = this.state.movies;
        aux[index].engage = event.target.value;
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
                <h1 className="quest-comp-description">Please answer the following questions honestly considering the scale from A to B</h1>
                <div>
                    {
                        this.state.movies.map( (movie, index) => (
                            <Jumbotron key={index}>
                                <Row className="display-row"> 
                                    <Col className="just" xs={12} md={4}>
                                        <h2 className="justification-title">Justification A:</h2>
                                        <p className="justification-compare"> { movie.justifyA } </p>
                                    </Col>
                                    <Col className="img-col" xs={12} md={4}>
                                        <h2><b> { movie.title } </b></h2>
                                        <Image src={testeImg} className="rec-movie"/>
                                    </Col>
                                    <Col className="just" xs={12} md={4}>
                                        <h2 className="justification-title">Justification B:</h2>
                                        <p className="justification-compare"> { movie.justifyB } </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <Row className="range-row">
                                            <Col lg={12}>
                                                <Form.Group controlId="rec">
                                                    {/* Persuasion */}
                                                    <Form.Label className="label-compare">Which justification is more convincing?</Form.Label>
                                                    <div className='rangeWrap'>
                                                        <input type="range" min="0" max="10" value="5" value={movie.quality} onChange={ (e)=> this.handleChangeQuality(e, index)} />
                                                        <div className='ticks'>
                                                        <div className="A"></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div className="B"></div>
                                                        </div>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="range-row">
                                            <Col lg={12}>
                                                <Form.Group controlId="transp">
                                                    {/* Transparency */}
                                                    <Form.Label className="label-compare">Which justification made you understand better the reason why the recommendation was suggested to you?</Form.Label>
                                                    <div className='rangeWrap'>
                                                        <input type="range" min="0" max="10" value="5" value={movie.transp} onChange={ (e)=> this.handleChangeTransp(e, index)} />
                                                        <div className='ticks'>
                                                            <div className="A"></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div className="B"></div>
                                                        </div>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        
                                        <Row className="range-row">
                                            <Col lg={12}>
                                                <Form.Group controlId="engage">
                                                    {/* Engagement */}
                                                    <Form.Label className="label-compare">Which justification made you discover new information about the movie?</Form.Label>
                                                    <div className='rangeWrap'>
                                                        <input type="range" min="0" max="10" value="5" value={movie.engage} onChange={ (e)=> this.handleChangeEngag(e, index)}  />
                                                        <div className='ticks'>
                                                            <div className="A"></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div className="B"></div>
                                                        </div>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                        </Row>
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
            </div>
        )
    }
}

export default ExplanationCompare