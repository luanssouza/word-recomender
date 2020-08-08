import React, { Component } from 'react'
import { Jumbotron, Form, Button, Row, Col, Image } from 'react-bootstrap';
import './explanationrate.css';
import { connect } from 'react-redux';
import { ADD_EXPLANATIONS } from '../../store/actions/actionsConst';
import { postRate, getExplanations } from '../../services/MovieService';

export class ExplanationRate extends Component {
    constructor(props) {
        super(props);

        let rec = this.props.recommendations.recommendations;
        rec = !rec ? [] : rec.map(x => x = {...x,liked: 5,understood: 5,words: 5,interested: 5,confidence: 5,discover: 5});
        this.state = { movies: rec};
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleChangeRecommendation = (event, index) => {
        let aux = this.state.movies;
        aux[index].liked = event.target.value;
        this.setState({ movies: aux  });
    }

    handleChangeTransparency = (event, index) => {
        let aux = this.state.movies;
        aux[index].understood = event.target.value;
        this.setState({ movies: aux  });
    }

    handleChangeWords = (event, index) => {
        let aux = this.state.movies;
        aux[index].words = event.target.value;
        this.setState({ movies: aux  });
    }

    handleChangePersuasion = (event, index) => {
        let aux = this.state.movies;
        aux[index].interested = event.target.value;
        this.setState({ movies: aux  });
    }

    handleChangeTrust = (event, index) => {
        let aux = this.state.movies;
        aux[index].confidence = event.target.value;
        this.setState({ movies: aux  });
    }

    handleChangeEngage = (event, index) => {
        let aux = this.state.movies;
        aux[index].discover = event.target.value;
        this.setState({ movies: aux  });
    }

    handlerNext = async (event) => {
        event.preventDefault();

        let body = {
            user_id: this.props.user.user.id,
            rates: this.state.movies
        }

        await postRate(body);
        let explanations = await getExplanations({user_id: body.user_id, movies: this.state.movies});
        this.props.onSubmitExplanations(explanations.data);

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
                                        <h1><b>{movie.title} ({movie.year})</b></h1>
                                        <p className="justification-rate"> {movie.explanation} </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <Row className="range-row">
                                            <Col lg={12}>
                                                <Form.Group controlId="liked">
                                                    {/* Effectiveness */}
                                                    <Form.Label className="label-rate">I liked the recommendation</Form.Label>
                                                    <div className='rangeWrap-rate'>
                                                        <input type="range" min="0" max="10" value={movie.liked} onChange={(e) => this.handleChangeRecommendation(e, index)} />
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
                                                <Form.Group controlId="understood">
                                                    {/* Transparency */}
                                                    <Form.Label className="label-rate">With the explanation, I understood why the recommendation was made for me</Form.Label>
                                                    <div className='rangeWrap-rate'>
                                                        <input type="range" min="0" max="10" value={movie.understood} onChange={(e) => this.handleChangeTransparency(e, index)} />
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
                                                <Form.Group controlId="interested">
                                                    {/* Persuasion */}
                                                    <Form.Label className="label-rate">The explanation made me more interested on the movie</Form.Label>
                                                    <div className='rangeWrap-rate'>
                                                        <input type="range" min="0" max="10" value={movie.interested} onChange={(e) => this.handleChangePersuasion(e, index)} />
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
                                                <Form.Group controlId="confidence">
                                                    {/* Trust */}
                                                    <Form.Label className="label-rate">The explanation provided made me have more confidence on the recommender system</Form.Label>
                                                    <div className='rangeWrap-rate'>
                                                        <input type="range" min="0" max="10" value={movie.confidence} onChange={(e) => this.handleChangeTrust(e, index)} />
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
                                                <Form.Group controlId="discover">
                                                    {/* engagement */}
                                                    <Form.Label className="label-rate">The explanation made me discover new information about the movie</Form.Label>
                                                    <div className='rangeWrap-rate'>
                                                        <input type="range" min="0" max="10" value={movie.discover} onChange={(e) => this.handleChangeEngage(e, index)} />
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
    explanations: state.explanations,
});

const mapDispatchToProps = (dispatch) => ({
    onSubmitExplanations: (value) =>
        dispatch({ type: ADD_EXPLANATIONS, payload: value })
});

export default connect(mapStateToProps, mapDispatchToProps)(ExplanationRate);