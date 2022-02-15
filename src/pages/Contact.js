import React from 'react'



const Contact=(props)=> {
    const { name, email } = props.contact;
   

  return (
    <div style={{display: "flex", justifyContent:"space-between"}}>
        <div className='item'>
            <div className = "header" style={{display:"flex"}}>
                <i class="user icon" style={{margin:"20px"}}></i>
                <div className = "content" style={{display:"flex"}}>
                    <div className = "name" >
                        {name}
                    </div>
                    <div className = "mail">
                        {email}
                    </div>
                </div>
                
            </div>
        </div>
        <div className = "item">  
            <i class="trash alternate icon" style={{color:"red", margin:"20px"}}></i>
        </div>
        
        
            
    </div>
  )
}

export default Contact