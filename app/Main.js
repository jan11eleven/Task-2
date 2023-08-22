'use client';
import { React, useState, useContext } from 'react';
import validate from './Validation';
import AlertMessage from './AlertMessage';

function Main({ contactListContext }) {
  const [isValid, setIsValid] = useState(false);

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const { contactList, setContactList } = useContext(contactListContext);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMobile = (e) => {
    setMobile(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!validate('name', name)) {
      setIsValid(true);
      return;
    }

    if (!validate('mobile', mobile)) {
      setIsValid(true);
      return;
    }

    if (!validate('email', email)) {
      setIsValid(true);
      return;
    }

    setContactList([
      ...contactList,
      { name: name, mobile: mobile, email: email },
    ]);

    setIsValid(false);
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <div className="flex flex-col items-center mb-12">
        <div className="flex justify-center mt-10">
          <input
            className="bg-slate-200 p-2 mr-5 drop-shadow-md"
            type="text"
            onChange={handleName}
            value={name}
            placeholder="Name"
          />
          <input
            className="bg-slate-200 p-2 mr-5 drop-shadow-md"
            type="text"
            onChange={handleMobile}
            value={mobile}
            placeholder="Mobile"
          />
          <input
            className="bg-slate-200 p-2 mr-5 drop-shadow-md"
            type="text"
            onChange={handleEmail}
            value={email}
            placeholder="Email"
          />
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded-md font-bold w-56 drop-shadow-xl"
          >
            Add Contact
          </button>
        </div>
        <AlertMessage visibility={isValid} />
      </div>
    </form>
  );
}

export default Main;
