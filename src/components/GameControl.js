import React from "react";
import { connect } from 'react-redux';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import Room from "./Room";
// import { seedDatabase } from './seed';

class GameControl extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      playing: false,
      won: false
    }
  }
  handleClickStart = () => {
    this.setState({playing: true});
  }
  render(){
    let currentVisibleState;
    if (!this.state.playing){
      currentVisibleState = <button onClick={this.handleClickStart}>Start Your Adventure!</button>
    }
    else if (this.state.playing){
      currentVisibleState = <Room />
    } else {
      if (this.state.won){
        currentVisibleState=<h1>You Won</h1>}
      else{
        currentVisibleState=<h1>You're fucking dead chump</h1>
      }
    }
    return(
      <React.Fragment>
      {currentVisibleState}
      </React.Fragment>
    )
  }
}

export default withFirestore(GameControl);