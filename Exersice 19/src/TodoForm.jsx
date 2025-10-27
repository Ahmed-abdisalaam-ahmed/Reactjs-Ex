import React from "react";
import { useContext, useState } from "react";
import TodoContext from "./TodoContext";
import styles from './style/todoForm.module.css'

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
    <div className={styles.formContainer}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add New Todo"
        className={styles.todoInput}
      />
      <button onClick={HandleAdd} className={styles.todoBtn}>Add</button>
    </div>
  );
};
