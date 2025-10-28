import React, { useContext } from 'react'

import TodoContext from './TodoContext'
import { Todoitem } from './Todoitem'

export const TodoList = () => {
 const { state } = useContext(TodoContext)

  return (
      <ul className="p-6 ">
        {state.map(todo=> (
            <Todoitem key={todo.id} todo={todo}/>
          ))
        }
      </ul>
  )
}

