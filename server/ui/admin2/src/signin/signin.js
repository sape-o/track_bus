import React,{Component} from 'react';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import {Button} from 'primereact/button';
import {Card} from 'primereact/card';



export class Signin extends Component{
  constructor() {
      super();
      this.state={
        username:null,
        password:null,


      }
  }
  render(){
    return(
      <Card style={{width:'300px'}} >
          <span className="p-float-label">
            <InputText style={{width:'250px'}} id="in" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} />
            <label htmlFor="in">Username or Email</label>
          </span>
          <br/>
          <span className="p-float-label">
            <Password style={{width:'250px'}} id="in" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} />
            <label htmlFor="in">Password</label>
          </span>
          <br/>
          <div>
            <Button label="Sing In" /> &nbsp;
            <Button label="Sing Up" className="p-button-success"/>
          </div>
          <div>
            <p>forget password</p>
          </div>
      </Card>
    );
  }

}
