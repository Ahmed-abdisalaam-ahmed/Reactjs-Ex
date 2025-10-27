import React, { useContext } from "react";
import TodoContext from "./TodoContext";
import styles from "./style/Todoitem.module.css";

export const Todoitem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  return (
    <li className={styles.todoitems}>
      <input type="checkbox" name="" id="" 
        onChange={()=>dispatch({type:'Toggle', payload: todo.id})}
      />
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          opacity: todo.completed ? 0.6 : 1,
        }}
      >
        {todo.text}
      </span>
      {todo.completed && (
        <button onClick={() => dispatch({ type: "Delete", payload: todo.id })} className={styles.itembtn}>
          Delete
        </button>
      )}
    </li>
  );
};
