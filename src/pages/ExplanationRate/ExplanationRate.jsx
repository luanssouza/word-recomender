import React, { Component } from 'react'
import { Jumbotron, Form, Button, Row, Col, Image } from 'react-bootstrap';
import './explanationrate.css';
import { connect } from 'react-redux';
import { ADD_MOVIES, ADD_RECOMMENDATION } from '../../store/actions/actionsConst';

export class ExplanationRate extends Component {
    constructor(props) {
        super(props);

        let rec = this.props.recommendations.recommendations
        this.state = { 
            movies: rec ? rec : []
        };

        this.handlerNext = this.handlerNext.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleChangeRecommendation = (event, index) => {
        let aux = this.state.movies;
        aux[index].effectiveness = event.target.value;
        this.setState({ movies: aux  });
    }

    handleChangeTransparency = (event, index) => {
        let aux = this.state.movies;
        aux[index].transparency = event.target.value;
        this.setState({ movies: aux  });
    }

    handleChangeWords = (event, index) => {
        let aux = this.state.movies;
        aux[index].words = event.target.value;
        this.setState({ movies: aux  });
    }

    handleChangePersuasion = (event, index) => {
        let aux = this.state.movies;
        aux[index].persuasion = event.target.value;
        this.setState({ movies: aux  });
    }

    handleChangeTrust = (event, index) => {
        let aux = this.state.movies;
        aux[index].trust = event.target.value;
        this.setState({ movies: aux  });
    }

    handleChangeEngage = (event, index) => {
        let aux = this.state.movies;
        aux[index].engage = event.target.value;
        this.setState({ movies: aux  });
    }

    handlerNext(event) {
        event.preventDefault();

        this.props.history.push('/explanationCompare');
    }

    render() {
        return (
            <div>
                <h1 className="quest-rate-description"> Please answer the following sentences honestly considering the scale from 0 to 10 where 0 means fully disagreement and 10 fully agreement</h1>
                <div>
                    {
                        this.state.movies.map((movie, index) => (
                            <Jumbotron key={index}>
                                <Row className="mb-4">
                                    <Col xs={12} md={4} lg={3} className="text-center">
                                        <Image src={movie.poster} className="m-2" width="192px"/>
                                    </Col>
                                    <Col xs={12} md={8} lg={9} >
                                        <h1><b>{movie.title}</b></h1>
                                        <p className="justification-rate"> {movie.explanation} </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <Row className="range-row">
                                            <Col lg={12}>
                                                <Form.Group controlId="effectiveness">
                                                    {/* Effectiveness */}
                                                    <Form.Label className="label-rate">I liked the recommendation</Form.Label>
                                                    <div className='rangeWrap-rate'>
                                                        <input type="range" min="0" max="10" value={movie.effectiveness} onChange={(e) => this.handleChangeRecommendation(e, index)} />
                                                        <div className='ticks'>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="range-row">
                                            <Col lg={12}>
                                                <Form.Group controlId="transparency">
                                                    {/* Transparency */}
                                                    <Form.Label className="label-rate">With the explanation, I understood why the recommendation was made for me</Form.Label>
                                                    <div className='rangeWrap-rate'>
                                                        <input type="range" min="0" max="10" value={movie.transparency} onChange={(e) => this.handleChangeTransparency(e, index)} />
                                                        <div className='ticks'>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="range-row">
                                            <Col lg={12}>
                                                <Form.Group controlId="words">
                                                    {/* Choose of words */}
                                                    <Form.Label className="label-rate">I liked the choose and relation of both words that describes the movies</Form.Label>
                                                    <div className='rangeWrap-rate'>
                                                        <input type="range" min="0" max="10" value={movie.words} onChange={(e) => this.handleChangeWords(e, index)} />
                                                        <div className='ticks'>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <Row className="range-row">
                                            <Col lg={12}>
                                                <Form.Group controlId="persuasion">
                                                    {/* Persuasion */}
                                                    <Form.Label className="label-rate">The explanation made me more interested on the movie</Form.Label>
                                                    <div className='rangeWrap-rate'>
                                                        <input type="range" min="0" max="10" value={movie.persuasion} onChange={(e) => this.handleChangePersuasion(e, index)} />
                                                        <div className='ticks'>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="range-row">
                                            <Col lg={12}>
                                                <Form.Group controlId="trust">
                                                    {/* Trust */}
                                                    <Form.Label className="label-rate">The explanation provided made me have more confidence on the recommender system</Form.Label>
                                                    <div className='rangeWrap-rate'>
                                                        <input type="range" min="0" max="10" value={movie.trust} onChange={(e) => this.handleChangeTrust(e, index)} />
                                                        <div className='ticks'>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="range-row">
                                            <Col lg={12}>
                                                <Form.Group controlId="engage">
                                                    {/* engagement */}
                                                    <Form.Label className="label-rate">The explanation made me discover new information about the movie</Form.Label>
                                                    <div className='rangeWrap-rate'>
                                                        <input type="range" min="0" max="10" value={movie.engage} onChange={(e) => this.handleChangeEngage(e, index)} />
                                                        <div className='ticks'>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Jumbotron>
                        ))
                    }
                    <Button variant="primary" className="float-md-right" onClick={this.handlerNext}>Next</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    movies: state.movies,
    recommendations: state.recommendations,
});

const mapDispatchToProps = (dispatch) => ({
    onSubmitMovies: (value) =>
        dispatch({ type: ADD_MOVIES, payload: value }),
    onSubmitRecommendation: (value) =>
        dispatch({ type: ADD_RECOMMENDATION, payload: value })
});

export default connect(mapStateToProps, mapDispatchToProps)(ExplanationRate);