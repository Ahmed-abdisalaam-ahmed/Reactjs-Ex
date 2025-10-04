import { useState ,useReducer} from "react";

const intialState = {
    CounterA : 0,
    CounterB : 0
}
const reducer = (state, action) => {
  if(state.CounterA >= 0 && state.CounterB >= 0){
    switch (action.type) {
    case "incrementA":
      return {  ...state ,CounterA: state.CounterA + 1 };
    case "descreamntA":
      return { ...state,CounterA: state.CounterA - 1 };
    case "incrementB":
      return { ...state,CounterB: state.CounterB + 1 };
    case "descreamntB":
      return { ...state,CounterB: state.CounterB - 1 };
    case "ResetAll":
        return intialState
    default:
      return state;
  }
  }else{
    return intialState
  }

};
function handleZero(){
  setRunning(true);

}
const Display = ()=>{
  const [state , dispatch] = useReducer (reducer , intialState)
  function handletheZero(){
      if (state.CounterA <= 0 || state.CounterB <= 0){
        return true 
      }
      else{
        return false
      }
    }
    return (
        <div>
            <h1>Double Counter</h1>
            <div>
                <h2>Counter A : {state.CounterA}</h2>
                <button disabled ={handletheZero()} onClick={()=> dispatch({type : 'descreamntA'})}>-A</button>
                <button onClick={()=> dispatch({type : 'incrementA'})}>+A</button>
            </div>
            <div>
                <h2>Counter B : {state.CounterB}</h2>
                <button disabled ={handletheZero()}
                 onClick={()=> dispatch({type : 'descreamntB'})}>-B</button>
                <button onClick={()=> dispatch({type : 'incrementB'})}>+B</button>
            </div>
            <button onClick={()=> dispatch({type : 'ResetAll'})}>Reset Both</button>
        </div>
    )
}
export default Display;