import { TextInput } from "./textinput";
import { Contacts } from "./contacts";
import React, { useState } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');

  const InputData = (event) => {
    event.preventDefault()
    setName(event.target.value);
  };
  
  const onSubmit = (event) => {
    event.preventDefault()
    let id=contacts.length+1
    setContacts(prevValue => [...prevValue, { name, id }]);
    console.log(contacts)
    }

  return (
    <div>
      <TextInput inputData={InputData} value={name} onSubmit={onSubmit} />
      <Contacts contacts={contacts} />
    </div>
  );
  };
  
