import React from "react";
import { useContext, useState } from "react";
import TodoContext from "./TodoContext";

export const TodoForm = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TodoContext);

  function HandleAdd(){
        if(text.trim()){
            const newTodo = {
                id: Date.now(),
                text,
                completed:false
            }
            dispatch({ type:"Add", payload: newTodo})
            setText('')
        }
    }
  return (
    <div className="font-roboto py-2.5 px-[15px] flex flex-row w-full">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add New Todo"
        className="font-roboto p-2.5 flex-1 rounded-[10px] border border-[#d9d9d9] text-base ml-[3px] focus:outline-none focus:border-[#8f0ff9]"
      />
      <button onClick={HandleAdd} className="font-roboto py-2.5 px-5 text-base bg-[#8f0ff9] rounded-[10px] border-none text-white ml-[3px] cursor-pointer transition-shadow duration-200 hover:shadow-md">Add</button>
    </div>
  );
};
