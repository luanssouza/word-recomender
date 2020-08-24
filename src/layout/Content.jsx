import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import ExperimentSteps from '../pages/ExperimentSteps/ExperimentSteps';
import UserForm from '../pages/UserForm/UserForm';
import Movies from '../pages/Movies/Movies';
import ExplanationRate from '../pages/ExplanationRate/ExplanationRate';
import ExplanationCompare from '../pages/ExplanationCompare/ExplanationCompare';
import Final from '../pages/Final/Final';
import Error from '../pages/Error/Error';
import { connect } from 'react-redux';

export class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { user: this.props.user.user };
    }

    isUser = (Component, routeProps) => this.props.user.user ? <Component {...routeProps}/> : <Redirect to="/"/>;
    
    render() {
        return (
            <Container>
                <Switch>
                    <Route exact path="/" component={ExperimentSteps}/>
                    <Route exact path="/userForm" component={UserForm}/>
                    <Route exact path="/movies" render={(routeProps) => this.isUser(Movies, routeProps)} />
                    <Route exact path="/explanationRate" render={(routeProps) => this.isUser(ExplanationRate, routeProps)}/>
                    <Route exact path="/explanationCompare" render={(routeProps) => this.isUser(ExplanationCompare, routeProps)}/>
                    <Route exact path="/final" render={(routeProps) => this.isUser(Final, routeProps)}/>
                    <Route component={Error}/>
                </Switch>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(Content);