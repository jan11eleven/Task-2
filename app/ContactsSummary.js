'use client';
import { React, useContext } from 'react';

import Contact from './Contact';

function ContactsSummary({ contactListContext }) {
  const { contactList, setContactList } = useContext(contactListContext);

  return (
    <div className="w-screen flex justify-center">
      <div className="w-9/12 bg-white p-10 rounded-md drop-shadow-xl">
        <h1 className="text-slate-950 font-bold text-xl mb-10">
          Contacts Summary
        </h1>
        <div className="grid grid-cols-3">
          <div className="border-b-2">Name</div>
          <div className="border-b-2">Mobile</div>
          <div className="border-b-2">Email</div>
        </div>
        {contactList.map((contact) => (
          <Contact
            contactDetails={{
              name: contact.name,
              mobile: contact.mobile,
              email: contact.email,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactsSummary;
