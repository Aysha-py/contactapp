import React, {useState} from 'react'
import './App.css';
import Header from './components/Header'
import AddContact from './pages/AddContact'
import Contact from './pages/Contact';
import ContactList from './pages/ContactList';

function App() {

  const [cont, setContact] =useState([])

  const handleAddContact = (contact) => {
    console.log(contact)
    setContact([...cont, contact])

  }
  return (
    <div className="ui container">
      <Header />
      <AddContact handleAddContact={handleAddContact}  />
      <ContactList contacts= {cont} />
    </div>
  );
}

export default App;
