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
    this.props.firestore.get({ collection: 'rooms', doc: id }).then((room) => {
      const firestoreRoom = {
        name: room.get("name"),
        scenario: room.get("scenario"),
        id: id
      };

      //   let optionArray = [];
      //   this.props.firestore.collection('rooms').doc(id).collection('options').get()
      //     .then(response => {
      //       response.forEach(document => {
      //         optionArray.push(document)
      //       });
      //     })
      // console.log("optionArray in GameControl",optionArray)

      this.setState({ selectedRoom: firestoreRoom.name, selectedScenario: firestoreRoom.scenario, id: firestoreRoom.id });
    })
    //if dead (eat baloney sandwich option id)|| openshed no helmet || if you dont reset boobytrap and fight him with shears instead
    //if helmet picked up -> reset that state property
    //if key found -> reset that state property
    //if still playing
    //if won
    //use id to get room or option now and feed that to Room.js in rerender
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