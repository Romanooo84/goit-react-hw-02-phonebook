import { TextInput } from "./textinput";
import { Contacts } from "./contacts";
import { Filter } from "./filter";
import React, { useState } from 'react';
import { nanoid } from "nanoid";



export const App = () => {
  const state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  const [userData, setUserData] = useState(state);

  const onChange = event => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }


  const onSubmit = event => {
    event.preventDefault();
    const { name, number, contacts } = userData;
    const isContact = contacts.some(
      contact => contact.name.toLowerCase() === name.trim().toLowerCase()
    );
    if (isContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    setUserData({
      ...userData,
      contacts: [...contacts, { id: nanoid(),name, number }],
      name: '',
      number: '',
    });
  }; 

  return (
    <div>
      <TextInput onChange={onChange} onSubmit={onSubmit} />
      <Contacts userData={userData} />
    </div>
  );
  };
  
