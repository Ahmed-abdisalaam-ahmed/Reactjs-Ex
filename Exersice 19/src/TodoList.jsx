import React, { useContext } from 'react'

import TodoContext from './TodoContext'
import { Todoitem } from './Todoitem'
import styles from './style/todoList.module.css'

export const TodoList = () => {
 const { state } = useContext(TodoContext)

  return (
      <ul className={styles.todolist}>
        {state.map(todo=> (
            <Todoitem key={todo.id} todo={todo}/>
          ))
        }
      </ul>
  )
}

