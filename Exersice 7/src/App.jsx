import { useState, useEffect} from "react";

const App = ()=>{
  const [x , setX] = useState(window.innerWidth)
  const [y ,setY] = useState(window.innerHeight)

  useEffect(()=>{
    const handleMousePos = (e)=> {
      setX(e.clientX);
      setY(e.clientY)
    }
    window.addEventListener("mousemove", (e)=>{
      handleMousePos(e)
    })
  },[])
return(
  <>
    <h1>X = {x}</h1>
    <h1>Y = {y}</h1>
  </>
)

}
export default App;