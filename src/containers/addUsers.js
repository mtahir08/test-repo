import React, { Component } from "react";
import { connect } from 'react-redux';

import { AddUser } from '../store/actions/index';

class AddUsers extends Component {

    constructor(props) {
        super(props);
        this.getFormData = this.getFormData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            first: null,
            last: null,
            age: null
        }
    }

    handleChange(ev) {
        let value = ev.target.value; 
        if(value != null || value.length > 3)  this.setState({ [ev.target.id]: value })
    }


    getFormData(ev) {
        ev.preventDefault();
        this.props.onTodoClick(this.state);
    }
    renderForm() {
        return <form onSubmit={this.getFormData}>
            <input type="text" id="first" onChange={this.handleChange} /><br />
            <input type="text" id="last" onChange={this.handleChange} /><br />
            <input type="text" id="age" onChange={this.handleChange} /><br />
            <input type="submit" value="Add User" />
        </form>
    }

    render() {
        return (<div>{this.renderForm()}</div>)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.prop
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onTodoClick: (user) => {
            dispatch(AddUser(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUsers);