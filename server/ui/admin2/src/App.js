import React, { Component } from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import {Document} from './document';
import {Signin} from './signin/';
import {Home} from './home/';
import {Bus} from './bus/';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import './App.css';




export default class App extends Component {



  render(){
    if(true){
      return(
        <div>
          <nav class="navbar is-primary" role="navigation" aria-label="main navigation" style={{width:'100%'}}>
            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                <Link to="/" class="navbar-item">SUT Track BUS</Link>
                <Link to="/home" class="navbar-item">Home</Link>
                <Link to="/document" class="navbar-item">Documentation</Link>
              </div>
              <div class="navbar-end">
                <div class="navbar-item">
                  <div class="buttons">
                 <Link to="/signin" class="button is-success">Sign Up</Link>
                 <Link to="/signup" class="button is-success">Sign In</Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <React.Fragment>
            <Route path="/home" component={Home} />
            <Route path="/document" component={Document} />
            <Route path="/signin" component={Signin} />


          </React.Fragment>
        </div>
      );
    }
  }
}
