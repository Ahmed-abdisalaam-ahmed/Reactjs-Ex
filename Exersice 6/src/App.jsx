import { useEffect, useState } from "react";

const App = ()=>{

  const [greet,setGreet] = useState("welcome");
  const [name,setName] = useState("");

  useEffect(()=>{
    document.title = greet + " " + name
  },[greet,name])


  return (
    <div>
      <h1>document title change project</h1>
      <input 
        type="text" 
        value={name}
        onChange={e=> setName(e.target.value)}
      />
      <input 
        type="text" 
        value={greet}
        onChange={e=> setGreet(e.target.value)}
      />
    </div>
  )
}
export default App;