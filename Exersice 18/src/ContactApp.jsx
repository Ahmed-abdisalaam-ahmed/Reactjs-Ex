import React, { useReducer ,useState } from 'react'
import ContextApp from './ContextApp'

import { initialState , reducer} from './Reducer'
import { ContactForm } from './ContactForm'
import { ContactList } from './ContactList'

const ContactApp = () => {

    const [state , dispatch] = useReducer(reducer ,initialState);
    const [editContact, setEditContact] = useState(null);
    

  return (
    <ContextApp.Provider value={{ state , dispatch , editContact , setEditContact}}>
        <h1> Contact App using useReducer and useContext</h1>
        <ContactForm/>
        <ContactList/>
    </ContextApp.Provider>
  )
}

export default ContactApp