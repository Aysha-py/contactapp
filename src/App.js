import React, {useState} from 'react'
import './App.css';
import Header from './components/Header'
import AddContact from './pages/AddContact'
import Contact from './pages/Contact';
import ContactList from './pages/ContactList';

function App() {

  const [contact, setContact] =useState([])

  const handleAddContact = (contact) => {
    console.log(contact)
    setContact([contact, contact])
  
  }
  return (
    <div className="ui container">
      <Header />
      <AddContact handleAddContact={handleAddContact}  />
      <ContactList contacts={contact} />
    </div>
  );
}

export default App;
