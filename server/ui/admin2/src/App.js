import React, { Component } from 'react';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import {Button} from 'primereact/button';
import {Card} from 'primereact/card';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';

class App extends Component {

  constructor() {
      super();
      this.state={
        username:null,
        password:null,


      }
  }

  render(){
    return(

      <Card style={{width:'300px'}}  >
        <span className="p-float-label">
          <InputText id="in" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} />
          <label htmlFor="in">Username</label>
        </span>
        <br/>
        <span className="p-float-label">
          <Password id="in" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} />
          <label htmlFor="in">Password</label>
        </span>
        <br/>
        <div>
          <Button label="Sing In" /> &nbsp;
          <Button label="Sing Up" className="p-button-success"/>
        </div>
      </Card>


    );
  }
}

export default App;
