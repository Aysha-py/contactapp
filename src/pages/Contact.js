import React from 'react'



const Contact=(props)=> {
    const { id,Name,email } = props.contact;
  return (
    <div>
        <div className = "item">  
            <div className = "content">
                <div className = "header">
                    {Name}
                </div>
                <div className = "mail">
                    {email}
                </div>
            </div>
        </div>
        <div className='item'>
            <div className = "header">
                <i class="trash alternate icon"></i>
            </div>
        </div>
            
    </div>
  )
}

export default Contact