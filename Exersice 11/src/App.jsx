import { useState } from "react";
import Display from "./display";

const App = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [isLoggedin, setLoggedIn] = useState(false);


  function handleSubmit(e) {
    e.preventDefault();
    console.log("Username:", user);
    console.log("Password:",pass);
    setLoggedIn(true) 
  }

  return (
      isLoggedin ? <Display Username={user} Password={pass} handleLoggedOff={ ()=> setLoggedIn(false)}/>: 
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required={true}
        />
        <br />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required={true}
        />
        <br />
        <br />
        <button onClick={handleSubmit}>Login</button>
        
      </form>
      );
}
export default App;
