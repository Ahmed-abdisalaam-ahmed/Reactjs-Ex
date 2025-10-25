import React, { useState,useEffect } from "react";
import { useContext } from "react";
import ContextApp from "./ContextApp";

export const ContactForm = () => {
  const { dispatch ,editContact , setEditContact} = useContext(ContextApp);
  const [contact , setContact ] = useState({id: null, name: "", email: "", phone: ""})
  const [ isEditing , setIsEditing] = useState(false)

  function handleSubmit(event){
    event.preventDefault();
    if (contact.name && contact.email && contact.phone) {
      if(isEditing){
        dispatch({type: 'Edit',payload:contact})
        setIsEditing(false);
      }
      else{
        dispatch({type:'Add', payload:{ ...contact, id: Date.now(), favorite: false}})
      }
      setContact({id: null, name: "", email: "", phone: ""})
    };
  }
  useEffect(() => {
    if (editContact) {
      setContact(editContact);
      setIsEditing(true);
    }
  }, [editContact]);
  function HandleChange(e){
    const {name ,value } = e.target;
    setContact({...contact , [name] : value})
  }
  function handlecancelEdit(){
    setContact({id: null, name: "", email: "", phone: ""});
    setIsEditing(false)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={HandleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="text"
            name="email"
            onChange={HandleChange}
            value={contact.email}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            onChange={HandleChange}
            value={contact.phone}
            required
          />
        </label>
      </div>
      <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
      {isEditing && <button type="button" onClick={handlecancelEdit}>Cancel</button>}
    </form>
    
  );
};
