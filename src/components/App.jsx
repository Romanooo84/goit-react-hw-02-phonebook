import { TextInput } from "./textinput";
import { Contacts } from "./contacts";
import React, { useState } from 'react';
import { nanoid } from "nanoid";

const INITIAL_STATE = {
  contacts: [],
  name:'',
}

export const App = () => {
  const [usersList, setusersList] = useState({ ...INITIAL_STATE });

  const InputData = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    let id=nanoid()
    setusersList({...INITIAL_STATE, [name]: {user: value, id: id} })
  };

  const onSubmit = (event) => {
  event.preventDefault();
  setusersList(prevValue => {
    return {
      ...prevValue,
      contacts: [...prevValue.contacts, usersList.name]
    };
  });
    console.log(usersList)
};
  
  return (
    <div>
      <TextInput inputData={InputData} onSubmit={onSubmit} />
      <Contacts />
    </div>
  );
  };
  
