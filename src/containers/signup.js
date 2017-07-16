import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

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

class SignUp extends Component {
    constructor() {
        super();
        this.onSignup = this.onSignup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.state = { name: null, email: null, password: null, "re-password": null }
        this.state = { name: "admin", email: "admin@admin.com", password: "123456", "re-password": "123456" }
    }

    onSignup() {
        this.props.onSignup(this.state);
    }

    handleChange(ev) {
        let newState = this.state
        newState[ev.target.id] = ev.target.value;
        this.setState(newState)
        // // this.textInput.focus();

    }

    componentWillReceiveProps(newProps) {
        console.log("newProps in signup", newProps.user);
        newProps.user.isRegistered ?this.props.history.push('/signin'):false;   
    }

    render() {

        // const styles = {
        //     paperStyle: {
        //         height: 400,
        //         width: 400,
        //         textAlign: 'center',
        //         marginLeft: 'auto',
        //         marginRight: 'auto',
        //         marginTop: '5%'
        //     },
        //     firstChild: {
        //         marginTop: '5%'
        //     },
        //     floatingLabelStyle: {
        //         color: '#9FA8DA'//'#e6ffcc',
        //     },
        //     floatingLabelFocusStyle: {
        //         color: '#C5CAE9'//blue500,
        //     },
        //     underlineStyle: {
        //         borderColor: '#9FA8DA',
        //     },
        //     underlineFocusStyle: {
        //         borderColor: '#C5CAE9',
        //     },
        //     btns: {
        //         marginTop: '10px',
        //     },
        //     loginBtn: {
        //         // marginLeft: 'auto',
        //         marginLeft: '5px',
        //     },
        //     signupBtn: {
        //         marginRight: '5px',
        //         // marginRight: 'auto',
        //     },
        //     forgotPassword: {
        //         marginTop: '10px',
        //         textWeight: 'bold'
        //     },
        //     loginBtnColor: 'rgb(0, 188, 212)'
        // }
        return (
            <Paper style={Style.paperStyle} zDepth={1}>
                <form>
                    <TextInput Style={Style.firstChild} label="Name" keyName="name" idName="name" textType="text" getVal={this.handleChange} />
                    <TextInput label="Email" keyName="email" idName="email" textType="email" getVal={this.handleChange} />
                    <TextInput label="Password" keyName="password" idName="password" textType="password" getVal={this.handleChange} />
                    <TextInput label="Re-Password" keyName="re-password" idName="re-password" textType="password" getVal={this.handleChange} />
                    <br />
                    <div style={Style.btns}>
                        <FloatingActionButton onTouchTap={this.onSignup}
                            style={Style.signupBtn}>
                            <i className="fa fa-check"></i>
                        </FloatingActionButton>
                        <Link to='/signin' >
                            <FloatingButton iconName="fa fa-sign-in" />
                        </Link>
                    </div>
                </form>

            </Paper>
        );
    }
}

// Get apps state and pass it as props to UserList
const mapStateToProps = (state, ownProps) => {
    console.log("mapStateToProps in signup",state.authReducer)
    return {
        user: state.authReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSignup: (user) => {
            dispatch(AuthActions.register(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);