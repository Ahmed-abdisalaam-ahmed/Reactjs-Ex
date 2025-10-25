import React, { useContext } from "react";
import ContextApp from "./ContextApp";
import { Contactitem } from "./Contactitem";

export const ContactList = () => {
  const { state } = useContext(ContextApp);

  return (
    <>
      {state.length > 0 ?(
        <ul>
          {state.map(contact => (
            <Contactitem key={contact.id} contact={contact}/>
          ))}
        </ul>
      ) : (
        <p>No item Found</p>
      )}
    </>
  );
};
