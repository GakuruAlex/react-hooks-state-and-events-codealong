import React from "react";
import {useState} from "react";

function Toggle() {
const[switchStatus,setSwitchStatus]=useState(false);

function toggleSwitch(){
setSwitchStatus((switchStatus)=>!switchStatus);
}
 const color=switchStatus?"red":"white";

  return <button onClick={toggleSwitch} style={{background:color}}>{switchStatus?"ON":"OFF"}</button>;
}

export default Toggle;
