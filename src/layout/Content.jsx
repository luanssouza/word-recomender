import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import UserForm from '../pages/UserForm/UserForm';
import Movies from '../pages/Movies/Movies';
import ExplanationRate from '../pages/ExplanationRate/ExplanationRate';
import ExplanationCompare from '../pages/ExplanationCompare/ExplanationCompare';
import Final from '../pages/Final/Final'

export class Content extends Component {
    constructor(props) {
        super(props);

        this.state = { isUserForm: false };
    }
    
    render() {
        return (
            <Container>
                <Switch>
                    <Route exact path="/" component={UserForm}/>
                    <Route exact path="/movies" component={Movies}/>
                    <Route exact path="/explanationRate" component={ExplanationRate}/>
                    <Route exact path="/explanationCompare" component={ExplanationCompare}/>
                    <Route exact path="/final" component={Final}/>
                </Switch>
            </Container>
        )
    }
}

export default Content