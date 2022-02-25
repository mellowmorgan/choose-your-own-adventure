import React from "react";
import { connect } from 'react-redux';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import Room from "./Room";

class GameControl extends React.Component{


  constructor(props){
    super(props)
    
    this.state = {
      id: null,
      playing: false,
      won: false,
      selectedRoom: "foyer",
      selectedScenario: "Your aunt Dorothy's jewels have gone missing and there's been some spooky goings-on in her mansion in Massachusetts. When you arrive to investigate, she's gone! Select a room to explore next: ",
      hasKey: false,
      hasHelmet: false,
      options: null
    }

  }
  optionClicked = (id) => {
    if (id instanceof Array){
      console.log("we got array")
      const obj = id[1]
      const roomIn = id[0]
      console.log(obj.consequence)
      if (obj.status=="lost"){
        alert("dead chump")
      } 
      else if (obj.status="won"){}
      else if (!obj.consequence && obj.nextRoom){}
          // this.setState({ selectedRoom: firestoreRoom.name, selectedScenario: firestoreRoom.scenario, id: firestoreRoom.id });
    }
    
    else{
    this.props.firestore.get({ collection: 'rooms', doc: id }).then((room) => {
      const firestoreRoom = { 
        name: room.get("name"),
        scenario: room.get("scenario"),
        id: id
      };
      
        this.setState({ selectedRoom: firestoreRoom.name, selectedScenario: firestoreRoom.scenario, id: firestoreRoom.id });
      
    })
  }
      

  

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
      currentVisibleState = <Room id={this.state.id} optionClicked={this.optionClicked}  room={this.state.selectedRoom} scenario={this.state.selectedScenario}/>
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