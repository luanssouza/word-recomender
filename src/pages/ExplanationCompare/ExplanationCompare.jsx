import React, { Component } from 'react'

export class ExplanationCompare extends Component {
    constructor(props) {
        super(props);

        this.state = { movie: { justifyA: "I'm the justification A", justifyB: "I'm the justification B" }, rate: {} };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div> { this.state.movie.justifyA } </div>
                <div> { this.state.movie.justifyB } </div>
                <br/>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        {/* TODO - Verify our avaliations parameters */}
                        <input type="submit" value="Next"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default ExplanationCompare