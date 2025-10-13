import React,{useContext}from 'react'

import TranslteContext from './TranslateContext'



const TranslateComponent = () => {

    const Translate = useContext(TranslteContext)
  return (
    <p>{Translate === "English" ? "Hello" : "¡Hola!"}</p>
  )
}

export default TranslateComponent