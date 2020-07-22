import React, { Component } from 'react'
import UserForm from '../UserForm/UserForm';
import Movies from '../Movies/Movies'
import ExplanationRate from '../ExplanationRate/ExplanationRate';
import ExplanationCompare from '../ExplanationCompare/ExplanationCompare';

import { Switch, Route } from 'react-router-dom';

export class Home extends Component {
    constructor(props) {
        super(props);

        this.state = { isUserForm: false };
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={UserForm}/>
                    <Route exact path="/movies" component={Movies}/>
                    <Route exact path="/explanationRate" component={ExplanationRate}/>
                    <Route exact path="/explanationCompare" component={ExplanationCompare}/>
                </Switch>
            </div>
        )
    }
}

export default Home
