import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
// import { addUser, deleteUser, updateUser } from '../store/actions/index';


// Material UI import
import { Paper, TextField, RaisedButton, FloatingActionButton, FlatButton } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Custom components
import TextInput from '../components/input';
import { FloatingButton, FButton } from '../components/button';

// Actions
import { AuthActions } from '../store/actions/auth';

// Style
import Style from '../styles/style';


class Signin extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            email: "abc@gmail.com",
            password: "123456"
        }
    }

    handleChange(ev) {
        let newState = this.state
        newState[ev.target.id] = ev.target.value;
        this.setState(newState)
        // // this.textInput.focus();

    }

    handleSubmit(ev) {
        ev.preventDefault();
        this.props.onLogin(this.state);
    }

    componentWillReceiveProps(newProps) {
        console.log("newProps in signin", newProps.user.isLoggedIn);
        newProps.user.isLoggedIn ? this.props.history.push('/dashboard') : false;
    }

    render() {

        const styles = {
            paperStyle: {
                height: 400,
                width: 400,
                textAlign: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '5%'
            },
            firstChild: {
                marginTop: '5%'
            },
            btns: {
                marginTop: '10px',
            },
            forgotPassword: {
                marginTop: '10px',
                textWeight: 'bold'
            },
            loginBtnColor: 'rgb(0, 188, 212)'
        }

        return (

            <Paper style={styles.paperStyle} zDepth={1}>
                <form>
                    <TextInput styles={styles.firstChild} label="Email" keyName="email" idName="email" textType="email" getVal={this.handleChange} value={this.state.email} />
                    <TextInput label="Password" keyName="password" idName="password" textType="password" getVal={this.handleChange} value={this.state.password} />
                    <br />
                    <div style={styles.btns}>
                        <FloatingActionButton onTouchTap={this.handleSubmit}
                            style={styles.signupBtn}
                            backgroundColor={styles.loginBtnColor}>
                            <i className="fa fa-sign-in"></i>
                        </FloatingActionButton>
                        <Link to='/signup' >
                            <FloatingButton iconName="fa fa-plus" />
                        </Link>
                    </div>
                    <div style={styles.forgotPassword}>
                        <FButton label="Forgot Password ?" />
                    </div>
                </form>
            </Paper >
        );
    }
}

// Get apps state and pass it as props to UserList
const mapStateToProps = (state, ownProps) => {
    console.log("mapStateToProps in signin", state)
    return {
        user: state.authReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLogin: (user) => {
            dispatch(AuthActions.login(user))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signin));