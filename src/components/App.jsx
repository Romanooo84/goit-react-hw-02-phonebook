import { TextInput } from "./textinput";
import { Contacts } from "./contacts";
import React, { useState } from 'react';
import { nanoid } from "nanoid";

const INITIAL_STATE = {
  id: '',
  name:'',
}

export const App = () => {
  const [contacts, setContacts] = useState({ ...INITIAL_STATE });

  const InputData = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    let id = nanoid()
    setContacts({id:id, [name]: value })
    console.log(contacts)
  };
  
  return (
    <div>
      <TextInput inputData={InputData} />
      <Contacts contacts={contacts} />
    </div>
  );
  };
  
