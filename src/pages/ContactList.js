import React from 'react'
import Contact from '../pages/Contact'

const ContactList =(props)=> {
  const { contacts } = props 
    
  return( 
    <div className="ui inverted segment">
      {contacts.map((contact, index) =>
      
          <Contact key={index} contact={contact} />
        
      )}
    </div>
  )
}

export default ContactList