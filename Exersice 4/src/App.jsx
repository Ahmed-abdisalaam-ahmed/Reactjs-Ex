import { useState } from "react";

function App (){
  const [isClick , setClick] = useState(true);

  const toogle = () =>{
   setClick(!isClick)
  }
  return (
    <>
     <h1>the button is {isClick ? "On" : "Off"}</h1>
     <button onClick={toogle}>Turn {isClick ? "Off" : "on"}</button>
    </>
  )
}

export default App;