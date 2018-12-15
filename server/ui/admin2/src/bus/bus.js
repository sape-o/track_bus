import React, {Component} from 'react';
import {InputMask} from 'primereact/inputmask';
import {InputText} from 'primereact/inputtext';
import {Card} from 'primereact/card';
import {Password} from 'primereact/password';
import {Toolbar} from 'primereact/toolbar';
import {Button} from 'primereact/button';
import 'bulma/css/bulma.css';
import 'bulma/css/bulma.min.css';


export class Bus extends Component{
  constructor() {
      super();
      this.state={
        numcar:null,
        license_plate:null,
        seat:null,
        username:null,
        password:null,


      }
  }

  render(){
    return(
      <div>
        <br/>
        <center>
          <Card style={{width:"80%"}} className="ui-card-shadow">
            <div>
              <InputMask
                style={{width:"15%"}}
                mask="99-999999"
                value={this.state.numcar}
                onChange={(e) => this.setState({numcar: e.value})}
                placeholder="เลขรถ"/>&nbsp;&nbsp;
              <InputMask
                style={{width:"15%"}}
                mask="****-9999"
                value={this.state.license_plate}
                onChange={(e) => this.setState({license_plate: e.value})}
                placeholder="ทะเบียนรถ"/>&nbsp;&nbsp;
              <InputMask
                style={{width:"15%"}}
                mask="999"
                value={this.state.seat}
                onChange={(e) => this.setState({seat: e.target.value})}
                placeholder="จำนวนที่นั่ง" />&nbsp;&nbsp;
              <InputText
                style={{width:"15%"}}
                value={this.state.username}
                onChange={(e) => this.setState({username: e.target.value})}
                placeholder="Username" />&nbsp;&nbsp;
              <Password
                style={{width:"15%"}}
                value={this.state.password}
                onChange={(e) => this.setState({password: e.target.value})}
                placeholder="Password"/>&nbsp;&nbsp;
              <Button label="Save" icon="pi pi-check" />
            </div>
          </Card>
        </center>
      </div>

    );
  }



}
