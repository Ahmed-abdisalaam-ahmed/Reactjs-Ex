import React,{useState} from 'react'

import TranslateContext from './TranslateContext'
import TranslateComponent from './TranslateComponent'

const App = () => {

  const [Translate ,setTranslate] = useState("English")

  const handleTanslate = ()=>{
    setTranslate((prev)=>(prev === "English" ? "Spanish" : "English"))
  }

  return (
    <TranslateContext.Provider value={Translate}>
      <TranslateComponent/>
      <button onClick={handleTanslate}>Switch the {Translate}</button>
    </TranslateContext.Provider>
  )
}

export default App