import React from 'react'
import './App.css';
import Header from './components/Header'
import AddContact from './pages/AddContact'
import ContactList from './pages/ContactList';

function App() {

  const list = [
    {
      id: 1,
      "Name" :"Tola",
      "email" : "Tola@gmail.com"

    },
    {
      id: 1,
      "Name" :"Tolu",
      "email" : "Tolu@gmail.com"

    }
  ]
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contact={list} />
    </div>
  );
}

export default App;
