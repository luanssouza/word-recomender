import React, { Component } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import './explanationrate.css';
import { connect } from 'react-redux';
import { ADD_EXPLANATIONS } from '../../store/actions/actionsConst';
import { postRate, getExplanations } from '../../services/MovieService';

export class ExplanationRate extends Component {
    constructor(props) {
        super(props);

        let rec = this.props.recommendations.recommendations;
        let semantic = rec.semantic;
        let reclist1_id = rec.reclist1_id;
        let baseline = rec.baseline;
        let reclist2_id = rec.reclist2_id;
        this.state = { 
            semantic: semantic,
            baseline: baseline,
            quality: 5,
            diversity: 5,
            serendipity: 5,
            reclist1: "", 
            reclist2: "",
            reclist1_id: reclist1_id,
            reclist2_id: reclist2_id
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleChangeQuality = (event) => {
        this.setState({ quality: event.target.value  });
    }

    handleChangeDiversity = (event) => {
        this.setState({ diversity: event.target.value  });
    }

    handleChangeSerendipity = (event) => {
        this.setState({ serendipity: event.target.value  });
    }

    handleChangeRecLis1 = (event) => {
        this.setState({ reclist2: event.target.value  });
    }

    handleChangeRecLis2 = (event) => {
        this.setState({ reclist2: event.target.value  });
    }

    handlerNext = async (event) => {
        try{
            event.preventDefault();

            let quality = this.state.quality; 
            let diversity = this.state.diversity; 
            let serendipity = this.state.serendipity; 
            let reclist1 = this.state.reclist1; 
            let reclist2 = this.state.reclist2; 
            let reclist1_id = this.state.reclist1_id; 
            let reclist2_id = this.state.reclist2_id;

            let body = {
                user_id: this.props.user.user.id,
                rates: { quality, diversity, serendipity, reclist1, reclist2, reclist1_id, reclist2_id }
            }

            await postRate(body);
            let explanations = await getExplanations({user_id: body.user_id, movies: this.state.semantic});
            this.props.onSubmitExplanations(explanations.data);

            this.props.history.push('/explanationCompare');
        }
        catch{
            this.props.history.push('/error');
        }
    }

    render() {
        return (
            <div>
                <h1 className="quest-rate-description"> Please answer the following sentences honestly considering the scale</h1>
                <div className="rec-movies">
                    <h1 className="rec-list-title">Recommendation List 1</h1> 
                    <hr></hr>
                    <div className="rec-list">
                    {
                        this.state.semantic.map((movie, index) => (
                            <div  key={index} className="rec-film">
                                <h1 className="film-title">{movie.title}</h1>
                                <img className="film-img" src={movie.poster} alt={"Poster of the film " + movie.title + " from the year " + movie.year} />
                                <p className="film-year">Year: {movie.year}</p>
                            </div>
                        ))
                    }
                    </div>
                </div>

                <div className="rec-movies">
                    <h1 className="rec-list-title">Recommendation List 2</h1> 
                    <hr></hr>
                    <div className="rec-list">
                    {
                        this.state.baseline.map((movie, index) => (
                            <div  key={index} className="rec-film">
                                <h1 className="film-title">{movie.title}</h1>
                                <img className="film-img" src={movie.poster} alt={"Poster of the film " + movie.title + " from the year " + movie.year} />
                                <p className="film-year">Year: {movie.year}</p>
                            </div>
                        ))
                    }
                    </div>
                </div>

                <Row>
                    <Col xs={12} md={6}>
                        <Row className="range-row">
                            <Col lg={12}>
                                <Form.Group controlId="quality">
                                    {/* Quality */}
                                    <Form.Label className="label-rate">Which recommendation list do you like the most?</Form.Label>
                                    <div className='rangeWrap-rate'>
                                        <input type="range" min="0" max="10" value={this.state.quality} onChange={(e) => this.handleChangeQuality(e)} />
                                        <div className='ticks'>
                                            <div className="List1"></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div className="Equal"></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div className="List2"></div>
                                        </div>
                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="range-row">
                            <Col lg={12}>
                                <Form.Group controlId="diversity">
                                    {/* Diversity */}
                                    <Form.Label className="label-rate">Which list has more variety of movies?</Form.Label>
                                    <div className='rangeWrap-rate'>
                                        <input type="range" min="0" max="10" value={this.state.diversity} onChange={(e) => this.handleChangeDiversity(e)} />
                                        <div className='ticks'>
                                            <div className="List1"></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div className="Equal"></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div className="List2"></div>
                                        </div>
                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="range-row">
                            <Col lg={12}>
                                <Form.Group controlId="serendipity">
                                    {/* Choose of words */}
                                    <Form.Label className="label-rate">Which list has more surpising recommendations?</Form.Label>
                                    <div className='rangeWrap-rate'>
                                        <input type="range" min="0" max="10" value={this.state.serendipity} onChange={(e) => this.handleChangeSerendipity(e)} />
                                        <div className='ticks'>
                                            <div className="List1"></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div className="Equal"></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div className="List2"></div>
                                        </div>
                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Group controlId="reclist1">
                            <Form.Label className="label-rate">Comments on Recommendarion List 1:</Form.Label>
                            <Form.Control as="textarea" rows="3" value={this.state.reclist1} onChange={(e) => this.handleChangeRecLis1(e)} />
                        </Form.Group>
                        <Form.Group controlId="reclist2">
                            <Form.Label className="label-rate">Comments on Recommendarion List 2:</Form.Label>
                            <Form.Control as="textarea" rows="3" value={this.state.reclist2} onChange={(e) => this.handleChangeRecLis2(e)} />
                        </Form.Group>
                    </Col>
                </Row>

                <Button variant="primary" className="float-md-right" onClick={this.handlerNext}>Next</Button>
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