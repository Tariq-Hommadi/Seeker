import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from "@auth0/auth0-react";
import ApiApp from './ApiApp';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import FavPage from './FavPage';
import Home2 from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";
import FavouritePage from "./FavouritePage";
import BookmarkPage from "./BookmarkPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  useNavigate,
  Navigate,
} from "react-router-dom";import Profile from "./Components/Home/Profile/Profile";




ReactDOM.render(

  <React.StrictMode>
<App />
    </React.StrictMode>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
