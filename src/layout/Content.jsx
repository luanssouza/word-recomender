import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import ExperimentSteps from '../pages/ExperimentSteps/ExperimentSteps';
import UserForm from '../pages/UserForm/UserForm';
import Movies from '../pages/Movies/Movies';
import ExplanationRate from '../pages/ExplanationRate/ExplanationRate';
import ExplanationCompare from '../pages/ExplanationCompare/ExplanationCompare';
import Final from '../pages/Final/Final';
import { connect } from 'react-redux';

export class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { user: !this.props.user.user };
    }
    
    render() {
        return (
            <Container>
                <Switch>
                    <Route exact path="/" component={ExperimentSteps}/>
                    <Route exact path="/userForm" component={UserForm}/>
                    <Route exact path="/movies" render={() => this.state.user ? <Redirect to="/"/> : <Movies />}/>
                    <Route exact path="/explanationRate" render={() => this.state.user ? <Redirect to="/"/> : <ExplanationRate />}/>
                    <Route exact path="/explanationCompare" render={() => this.state.user ? <Redirect to="/"/> : <ExplanationCompare />}/>
                    <Route exact path="/final" render={() => this.state.user ? <Redirect to="/"/> : <Final />}/>
                </Switch>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(Content);