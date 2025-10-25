import React, { useContext, useState } from "react";
import ContextApp from "./ContextApp";

export const Contactitem = ({ contact }) => {
  const { dispatch ,setEditContact} = useContext(ContextApp);

  const ToggleHandle = () => {
    dispatch({ type: "ToggleFavorite", payload: contact.id });
  };

  return (
    <li>
      <span style={{ fontWeight: "bold" }}>{contact.name}{contact.favorite && "⭐"}</span>
      <br />
      <br />
      <span>{contact.email}</span>
      <br />
      <br />
      <span>{contact.phone}</span>
      <br />
      <br />
      <button onClick={() => dispatch({ type: "Delete", payload: contact.id})}>
        Delete
      </button>
      <button onClick={()=>setEditContact(contact)}>Edit</button>
      <button onClick={ToggleHandle}>{contact.favorite ? "unFavorite" : "Favorite"}</button>
      <br />
      <br />
    </li>
  );
};
