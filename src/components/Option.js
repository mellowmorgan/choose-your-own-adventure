import React from "react";
import PropTypes from "prop-types";

function Option(props){
  let clickArgument;
  if (props.roomNameForOption){
    clickArgument = [props.roomNameForOption,props.obj]
  }
  else{
    clickArgument = props.obj.id
  }
  return(
    <React.Fragment>
      <button onClick={() => props.optionClicked(clickArgument)}>{props.option}</button>
    </React.Fragment>
  )
}
Option.propTypes = {
  option: PropTypes.string,
  roomNameForOption: PropTypes.string,
  obj: PropTypes.object,
  optionClicked: PropTypes.func
}
export default Option;