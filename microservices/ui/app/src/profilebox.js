import React, { Component } from 'react';
import axios from 'axios';
import {Card, CardMedia, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';

export default class ProfileBox extends Component {
  constructor(){
    super();
    this.state = {
      userData: {}
    }
  }
  componentDidMount(){
    axios.get(`https://api.${process.env.REACT_APP_CLUSTER_NAME}.hasura-app.io/users`).then((result)=>{
      this.setState({userData:result.data.data})
    })
  }
  render() {
    return (
      <Paper className="ProfileBoxWrapper" style={{backgroundColor:'#262df5',width:"360px", height:"500px"}}>
        <Paper style={{backgroundColor:'#00c3ff', height:"72px", paddingTop:"1px"}}>
          <h1 style={{color:"white"}}>Profile</h1>
        </Paper>
        <Card style={{marginTop:"10px"}}>
          <CardMedia style={{width:"350px", margin:"3px"}}>
            <img
              src={this.state.userData.Avatar} 
              className="user-avatar" alt="" 
              style={{border:"2px solid black"}}
            />
          </CardMedia>
        </Card>
        <Card style={{marginTop:"10px"}}>
          <CardText style={{padding:"0px", paddingTop:"5px"}}>{<h2>{this.state.userData.Name}</h2>}</CardText>
        </Card>
        <Card style={{marginTop:"10px"}}>
          <CardText style={{padding:"0px", paddingTop:"5px"}}>{"Totally won "+this.state.userData.Score+" events"}</CardText>
        </Card>
        <Card style={{marginTop:"10px", marginBottom:"10px"}}>
          <CardText style={{padding:"0px", paddingTop:"5px"}}>Last Participated in:<b style={{marginLeft:"10px"}}>{this.state.userData.Latest}</b></CardText>
        </Card>
      </Paper>
    );
  }
}