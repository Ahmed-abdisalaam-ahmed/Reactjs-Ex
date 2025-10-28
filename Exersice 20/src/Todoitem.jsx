import React, { useContext } from "react";
import TodoContext from "./TodoContext";

export const Todoitem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  return (
    <li className="font-roboto bg-[#f9fbfc] rounded-[5px] py-2.5 px-5 shadow-sm text-base flex gap-2.5 mb-[5px] items-center">
      <input type="checkbox" name="" id="" 
        onChange={()=>dispatch({type:'Toggle', payload: todo.id})}
        className=""
      />
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          opacity: todo.completed ? 0.6 : 1,
        }}
        className="flex-1"
      >
        {todo.text}
      </span>
      {todo.completed && (
        <button onClick={() => dispatch({ type: "Delete", payload: todo.id })} className="border-0 text-red-500 bg-[#f9fbfc] cursor-pointer hover:text-red-700 transition">
          Delete
        </button>
      )}
    </li>
  );
};
