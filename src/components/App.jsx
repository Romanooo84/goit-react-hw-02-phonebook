import { TextInput } from "./textinput";
import { Contacts } from "./contacts";
import React, { useState } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phoneNumber, setphoneNumber] = useState()

  const InputData = (event) => {
    event.preventDefault()
    setName(event.target.value);
  };
  
  const onSubmit = (event) => {
    let id=contacts.length+1
      setContacts(prevValue => [...prevValue, { name, id}]);
    console.log(contacts)
    console.log(contacts[0].name)
    }

  return (
    <div>
      <TextInput inputData={InputData} value={name} onSubmit={onSubmit} />
      <Contacts contacts={contacts} />
    </div>
  );
  };
  
