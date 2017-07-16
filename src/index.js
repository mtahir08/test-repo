import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import path from 'path';

// import 'font-awesome/css/font-awesome.css';

import routes from './config/routes.jsx';

let app = document.getElementById('root');
ReactDOM.render(routes, app);
