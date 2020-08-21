import React, { Component } from 'react'
import { Jumbotron, Form, Button, Row, Col, Image } from 'react-bootstrap';
import './explanationcompare.css';
import { connect } from 'react-redux';
import { postCompare } from '../../services/MovieService';

export class ExplanationCompare extends Component {
    constructor(props) {
        super(props);

        let exp = this.props.explanations.explanations;
        exp = !exp ? [] : exp.map(x => x = {...x,convincing: 5,understood: 5,discover: 5,commentrec: "",commentjust: ""});

        this.state = { movies: exp };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleChangeQuality = (event, index) => {
        let aux = this.state.movies;
        aux[index].convincing = event.target.value;
        this.setState({ movies: aux  });
    }

    handleChangeTransp = (event, index) => {
        let aux = this.state.movies;
        aux[index].understood = event.target.value;
        this.setState({ movies: aux  });
    }

    handleChangeEngag = (event, index) => {
        let aux = this.state.movies;
        aux[index].discover = event.target.value;
        this.setState({ movies: aux  });
    }

    handleChangeJusComments = (event, index) => {
        let aux = this.state.movies;
        aux[index].commentjust = event.target.value;
        this.setState({ movies: aux  });
    }

    handleChangeRecComments = (event, index) => {
        let aux = this.state.movies;
        aux[index].commentrec = event.target.value;
        this.setState({ movies: aux  });
    }

    handlerFinish = async (event) => {
        let body = {
            user_id: this.props.user.user.id,
            compares: this.state.movies
        }

        await postCompare(body);

        event.preventDefault();
        this.props.history.push('/final');
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
                                        <p className="justification-compare"> { movie.justA } </p>
                                    </Col>
                                    <Col className="img-col" xs={12} md={4}>
                                        <h2><b> { movie.title } </b></h2>
                                        <Image src={movie.poster} className="rec-movie" width="192px"/>
                                    </Col>
                                    <Col className="just" xs={12} md={4}>
                                        <h2 className="justification-title">Justification B:</h2>
                                        <p className="justification-compare"> { movie.justB } </p>
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
                                                        <input type="range" min="0" max="10" value={movie.convincing} onChange={ (e)=> this.handleChangeQuality(e, index)} />
                                                        <div className='ticks'>
                                                        <div className="A"></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div className="Equal"></div>
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
                                                <Form.Group controlId="understood">
                                                    {/* Transparency */}
                                                    <Form.Label className="label-compare">Which justification made you understand better the reason why the recommendation was suggested to you?</Form.Label>
                                                    <div className='rangeWrap'>
                                                        <input type="range" min="0" max="10" value={movie.understood} onChange={ (e)=> this.handleChangeTransp(e, index)} />
                                                        <div className='ticks'>
                                                            <div className="A"></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div className="Equal"></div>
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
                                                <Form.Group controlId="discover">
                                                    {/* Engagement */}
                                                    <Form.Label className="label-compare">Which justification made you discover new information about the movie?</Form.Label>
                                                    <div className='rangeWrap'>
                                                        <input type="range" min="0" max="10" value={movie.discover} onChange={ (e)=> this.handleChangeEngag(e, index)}  />
                                                        <div className='ticks'>
                                                            <div className="A"></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div className="Equal"></div>
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
                                        <Form.Group controlId="commentrec">
                                            <Form.Label>Comments on the Recommendation:</Form.Label>
                                            <Form.Control as="textarea" rows="4" value={movie.commentrec} onChange={ (e)=> this.handleChangeRecComments(e, index)} />
                                        </Form.Group>
                                        <Form.Group controlId="commentjust">
                                            <Form.Label>Comments on the Justification:</Form.Label>
                                            <Form.Control as="textarea" rows="4" value={movie.commentjust} onChange={ (e)=> this.handleChangeJusComments(e, index)} />
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

const mapStateToProps = (state) => ({
    user: state.user,
    movies: state.movies,
    recommendations: state.recommendations,
    explanations: state.explanations,
});

export default connect(mapStateToProps)(ExplanationCompare);