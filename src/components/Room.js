import React from "react";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import Option from './Option'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
function Room(props){
  useFirestoreConnect([
    { collection: 'rooms',
    doc: props.room,
    collection: 'options'
  }
  ]);

  const rooms = useSelector(state => state.firestore.ordered.rooms);
  const roomOptions = useSelector(state => state.firestore.ordered.options);
  console.log(rooms)
  if (isLoaded(rooms) && props.room==="foyer"){

  
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
    <h3>test2</h3>
  </React.Fragment>
    )
}
else{
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
  optionClicked: PropTypes.func
}
export default Room;