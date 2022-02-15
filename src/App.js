import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header'
import AddContact from './pages/AddContact'
import ContactList from './pages/ContactList';

function App() {
  const LOCAL_STORAGE_KEY ="cont";
  const [cont, setContact] =useState([])

  const handleAddContact = (contact) => {
    // console.l[og(contact)
    setContact([...cont, contact])

  }
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cont));
    
  } ,[cont]);
  useEffect(()=>{
    const retrieveContact =JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContact){
      setContact(retrieveContact);
    }
    
  },[])

  return (
    <div className="ui container">
      <Header />
      <AddContact handleAddContact={handleAddContact}  />
      <ContactList contacts= {cont} />
    </div>
  );
}

export default App;
