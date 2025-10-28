import React,{ useReducer } from 'react'
import TodoContext from './TodoContext'
import {initialState, reducer} from './Reducer'
import {TodoList} from './TodoList'
import {TodoForm} from './TodoForm'

export const TodoApp = () => {
const [state, dispatch] = useReducer(reducer ,initialState)

  return (
    <TodoContext.Provider value={{ state, dispatch}}>
        <div className="mx-auto mt-20 w-[400px] h-[400px] bg-[#f0f8ff] rounded-[15px] shadow-md py-2.5 px-5">
            <h2 className="capitalize text-xl text-center py-2.5">Todo App with Context and Reducer</h2>
            <TodoForm />
            <TodoList/>
        </div>
    </TodoContext.Provider>
  )
}
