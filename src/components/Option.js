import React from "react";
import PropTypes from "prop-types";

function Option(props){
  return(
    <React.Fragment>
      <button onClick={() => props.optionClicked(props.obj.id)}>{props.option}</button>
    </React.Fragment>
  )
}
Option.propTypes = {
  option: PropTypes.string,
  obj: PropTypes.object,
  optionClicked: PropTypes.func
}
export default Option;