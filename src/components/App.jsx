import { TextInput } from "./textinput";
import { Contacts } from "./contacts";
import React, { useState } from 'react';

const INITIAL_STATE = {
  id: '',
  name:'',
}

export const App = () => {
  const [contacts, setContacts] = useState({ ...INITIAL_STATE });

  const InputData = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    setContacts({[name]: value })
    console.log(contacts)
  };
  
  return (
    <div>
      <TextInput inputData={InputData} />
      <Contacts contacts={contacts} />
    </div>
  );
  };
  
