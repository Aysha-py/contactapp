import React from 'react'
import Contact from '../pages/Contact'

const ContactList =(props)=> {
  const renderContactList = props.contacts.map((contact)=>{

    return <Contact contact = {contact} ></Contact>
    

  });

    
      
    
    return( 
      <div className="ui inverted segment">
        {renderContactList}
      </div>
    )
}

export default ContactList