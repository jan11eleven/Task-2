'use client';
import ContactsSummary from './ContactsSummary';
import Header from './Header';
import Main from './Main';
import { React, useState, createContext } from 'react';

export default function Home() {
  const [contactList, setContactList] = useState([]);
  const ContactListContext = createContext();

  return (
    <ContactListContext.Provider value={{ contactList, setContactList }}>
      <div className="bg-slate-100 h-screen">
        <Header />
        <Main contactListContext={ContactListContext} />
        <ContactsSummary contactListContext={ContactListContext} />
      </div>
    </ContactListContext.Provider>
  );
}
