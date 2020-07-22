import React, { Component } from 'react'

export class ExplanationRate extends Component {
    constructor(props) {
        super(props);

        this.state = { movie: { justify: "xyz"}, rate: {} };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.history.push('/explanationCompare');
    }

    render() {
        return (
            <div>
                <div> { this.state.movie.justify } </div>
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

export default ExplanationRate