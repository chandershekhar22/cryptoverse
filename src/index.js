import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from 'react-redux'
import store from './app/store'
import App from './App'
import 'antd/dist/reset.css'; // or 'antd/dist/antd.css' for older versions

ReactDOM.render(
     <Router>
 <Provider store={store}>
    <App/>
 </Provider>
    </Router>,
document.getElementById('root')
);