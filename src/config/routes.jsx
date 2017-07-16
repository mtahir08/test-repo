import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import { Provider } from "react-redux";

// Material UI 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
// import registerServiceWorker from './registerServiceWorker';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import Signin from "../containers/signin.js";
import Signup from "../containers/signup.js";
import Dashboard from "./../containers/dashboard"

// import Main from "./../containers/Main.jsx";
// import Home from "./../containers/Home.jsx";

import store from "../store/index.js";

// function check(nextState, replace) {
//     let user = localStorage.getItem("upwork-app");
//     if (!user) {
//         replace({
//             pathname: 'signin',
//             state: { nextPathname: nextState.location.pathname }
//         })
//     }
// }

let routes = (
    <MuiThemeProvider>
        <Provider store={store}>
            <HashRouter>
                <div>
                    <Route exact path="/" component={Signin} />
                    <Route path="/signin" component={Signin} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/dashboard" component={Dashboard} />
                </div>
            </HashRouter>
        </Provider>
    </MuiThemeProvider>
)
// registerServiceWorker();

export default routes;


//    <MuiThemeProvider>
//         <Provider store={store}>
//             <Router history={hashHistory}>
//                 <Route path="/" component={Main}>
//                     <IndexRoute component={Signin}></IndexRoute>
//                     <Route path="signin" component={Signin}></Route>
//                     <Route path="signup" component={Signup}></Route>
//                     <Route component={Dashboard} >
//                         <IndexRoute component={Home}></IndexRoute>
//                         <Route path="home" component={Home}></Route>
//                         <Route path="profile" component={Signup}></Route>
//                     </Route>
//                 </Route>
//             </Router>
//         </Provider>
//     </MuiThemeProvider>
