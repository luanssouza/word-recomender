import React, { Component } from 'react'
import { Form, Button, Row, Col} from 'react-bootstrap';
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
                            <div className="just-movies">
                                <h1 className="just-list-title">Recommendation {index + 1}</h1> 
                                <hr/>
                                <div>
                                    <Row className="row-compare">
                                        <Col className="just" sm={12} md={4} xl={4}>
                                            <h2 className="just-film-title">Justification A:</h2>
                                            <p className="just-compare"> { movie.justA } </p>
                                        </Col>
                                        <Col className="img-col" sm={12} md={4} xl={4}>
                                            <div className="just-film">
                                                <h1 className="just-film-title">{movie.title}</h1>
                                                <img className="just-film-img" src={movie.poster} alt={"Poster of the film " + movie.title + " from the year " + movie.year} />
                                                <p className="film-year">Year: 2003</p>
                                            </div>
                                        </Col>
                                        <Col className="just" sm={12} md={4} xl={4}>
                                            <h2 className="just-film-title">Justification B:</h2>
                                            <p className="just-compare"> { movie.justB } </p>
                                        </Col>
                                    </Row>
                                </div>
                                <hr/>
                                <Row className="just-rate">
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
                                                        <input type="range" min="0" max="10" value={movie.discover} onChange={ (e)=> this.handleChangeEngag(e, index)} />
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
                                            <Form.Label className="label-compare">Comments on the Recommendation:</Form.Label>
                                            <Form.Control as="textarea" rows="4" value={movie.commentrec} onChange={ (e)=> this.handleChangeRecComments(e, index)} />
                                        </Form.Group>
                                        <Form.Group controlId="commentjust">
                                            <Form.Label className="label-compare">Comments on the Justifications:</Form.Label>
                                            <Form.Control as="textarea" rows="4" value={movie.commentjust} onChange={ (e)=> this.handleChangeJusComments(e, index)} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </div>
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