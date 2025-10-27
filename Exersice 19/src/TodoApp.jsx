import React,{ useReducer } from 'react'
import styles from './style/todoApp.module.css'

import TodoContext from './TodoContext'
import {initialState, reducer} from './Reducer'
import {TodoList} from './TodoList'
import {TodoForm} from './TodoForm'

export const TodoApp = () => {
const [state, dispatch] = useReducer(reducer ,initialState)

  return (
    <TodoContext.Provider value={{ state, dispatch}}>
        <div className={styles.appContainer}>
            <h2 className={styles.headerTitle}>Todo App with Context and Reducer</h2>
            <TodoForm />
            <TodoList/>
        </div>
    </TodoContext.Provider>
  )
}
