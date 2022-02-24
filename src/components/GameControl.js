import React from "react";
import { connect } from 'react-redux';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import Room from "./Room";

class GameControl extends React.Component{


  constructor(props){
    super(props)
    
    this.state = {
      playing: false,
      won: false,
      selectedRoom: "foyer",
      selectedScenario: "Your aunt Dorothy's jewels have gone missing and there's been some spooky goings-on in her mansion in Massachusetts. When you arrive to investigate, she's gone! Select a room to explore next: ",
      
    }

  }
  optionClicked = (id) => {
    console.log(id)
  }

  handleClickStart = () => {
    this.setState({
      playing: true
    });
    
  }
  render(){
    let currentVisibleState;
    if (!this.state.playing){
      currentVisibleState = <button onClick={this.handleClickStart}>Start Your Adventure!</button>
    }
    else if (this.state.playing){
      currentVisibleState = <Room optionClicked={this.optionClicked}  room={this.state.selectedRoom} scenario={this.state.selectedScenario}/>
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