import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'

// Material UI import
import { Paper, AppBar, Card, CardHeader, CardText } from 'material-ui';

// Actions
import { AuthActions } from '../store/actions/auth';

// Style
import Style from '../styles/style';

// Custom components
import { FloatingButton, FButton } from '../components/button';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // console.log("this.props.user", this.props.user);
    }

    componentWillReceiveProps(newProps) {
        console.log("newProps-dashboard", newProps);
    }

    render() {
        return (
            <div>
                Dashboard
            </div>

        );
    }
}

// Get apps state and pass it as props to UserList
const mapStateToProps = (state, ownProps) => {
    console.log("state.authReducer in dashboard", state.authReducer);
    return {
        user: state.authReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // onLogin: (user) => {
        //     dispatch(AuthActions.login(user))
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);