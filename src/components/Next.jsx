import React from 'react';
import { Button } from 'react-bootstrap'
import { withRouter } from 'react-router';
import './next.css'

class Next extends React.Component {

    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.history.push('/explanationRate');
    }

    render(){
        return  (
                <Button className="btn btn-primary btn-submit" id="next-btn" disabled={this.props.next} onClick={this.handleSubmit}>
					Next
                    <svg viewBox="0 0 16 16" className="bi bi-arrow-right-circle next-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path fillRule="evenodd" d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/>
                        <path fillRule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
                    </svg>
				</Button>
        );
    }
}

export default withRouter(Next);