import React, { Component } from 'react';
import {Route,Switch,Link} from 'react-router-dom';

import {Signin} from './signin/signin';
import {Home} from './home/home';
import {Bus} from './bus/bus';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import './App.css';




export default class App extends Component {



  render(){
    return(
      <div>
      <nav class="navbar is-primary" role="navigation" aria-label="main navigation" style={{width:'100%'}}>
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
              <Link to="/" class="navbar-item">SUT Track BUS</Link>
            <a class="navbar-item">Home</a>
            <a class="navbar-item">Documentation</a>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
             <Link to="/signin" class="button is-success">Sign Up</Link>
             <Link to="/Signup" class="button is-success">Sign In</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <React.Fragment>
        <Route path="/signin" component={Signin} />
      </React.Fragment>
    </div>
  );
  }
}
