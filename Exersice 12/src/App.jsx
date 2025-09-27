import {useState} from "react";

const App = () => {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    if (count >= 0) {
    setCount(count + 1);
  }
}
  function handleDiscrement() {
    if (count != 0){
        setCount(count - 1);
    }

  }
  return (
        <div>
            <h1>count is : {count} </h1>
            <button onClick={handleIncrement}>Increment</button>
            <button disabled={count === 0} onClick={handleDiscrement}>Decrement</button>
        </div>
  )
}
export default App;