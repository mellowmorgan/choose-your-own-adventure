import React from "react";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import Option from './Option'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'

function Room(props){
  useFirestoreConnect([
    { collection: 'rooms'}
  ]);

  const rooms = useSelector(state => state.firestore.ordered.rooms);
  let docName = "Basement";
  if (props.room !== "foyer"){
    docName = props.room
  }
  
  useFirestoreConnect([ 
    {collection: 'rooms', doc:docName, subcollections: [{ collection: 'options' }], storeAs: 'myOptions' } ])
  const roomOptions = useSelector(state => state.firestore.ordered.myOptions);  
  console.log("props id in Room.js", props.id)
  console.log("rooms", rooms);
  if (isLoaded(rooms) && props.room === "foyer"){
    return(
      <React.Fragment>
        <h3>You've entered the {props.room}</h3>
        <p>{props.scenario}</p>
        <div>
          {rooms.map((room) => {
            return <Option key={room.id} optionClicked={props.optionClicked} obj={room} option={room.name}/>
          })}
        </div>
      </React.Fragment>
    )
  }
  else if (isLoaded(roomOptions)){
    return(
      <React.Fragment>
        <h3>You've entered the {props.room}</h3>
        <p>{props.scenario}</p>
        <div>
          {roomOptions.map((option) => {
            return <Option key={option.id} optionClicked={props.optionClicked} obj={option} option={option.content}/>
          })}
        </div>
      </React.Fragment>
      )
  }
  else {
    return(
      <React.Fragment>
    <h3>Loading...</h3>
  </React.Fragment>
    )
  }
}

Room.propTypes = {
  room: PropTypes.string,
  scenario: PropTypes.string,
  optionClicked: PropTypes.func,
  id: PropTypes.string,
  options: PropTypes.array
}
export default Room;