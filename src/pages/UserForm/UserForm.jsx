import React, { Component } from 'react';

export class UserForm extends Component {
    constructor(props) {
        super(props);

        this.state = { movies: [], age: 0, gender: 0 };

        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeGender = this.handleChangeGender.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeAge(event) {
        this.setState({ age: event.target.value });  
    }

    handleChangeGender(event) {
        this.setState({ gender: event.target.value });  
    }

    handleSearch(event) {
        event.preventDefault();

        alert("Você pesquisou algo!");
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.history.push('/movies');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Age: 
                    <select value={this.state.age} onChange={this.handleChangeAge}>
                        <option value="0">0-17</option>
                        <option value="1">17-24</option>
                        <option value="2">25-50</option>
                        <option value="3">50-100</option>
                    </select>
                </label>

                <label>Gender: 
                    <select value={this.state.gender} onChange={this.handleChangeGender}>
                        <option value="0">Male</option>
                        <option value="1">Female</option>
                        <option value="2">Others</option>
                    </select>
                </label>

                <input type="submit" value="Next"/>
            </form>
        )
    }
}

export default UserForm
