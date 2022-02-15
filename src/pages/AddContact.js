import React, {useState} from 'react'

const AddContact = (props) => {
    const { handleAddContact,} = props

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const add = (e)=>{
        e.preventDefault();
        if (name === "" || email ===""){
            alert("All field is mandatory")
            return;
            
        } 
    
        handleAddContact({name,email})
        setEmail("")
        setName("")
        
        
    }


  return (   
    <div className='ui'>
        <h2>Add Contact</h2>
        <form onSubmit={add} className='ui form' > 
            <div className='field'>
                <label> Name</label>
                <input type ="text"  value ={email}placeholder='Name :' onChange={ (e)=> setEmail (e.target.value)} required></input>
            </div>
            <div className='field'>
                <label> Email</label>
                <input type ="email"  value ={name} placeholder='Email:' onChange ={(e)=> setName(e.target.value)} required></input> 
            </div>
            <button type='submit' className='ui button blue'>
                Submit
            </button>
           
        </form>

    </div>
  )
}

export default AddContact