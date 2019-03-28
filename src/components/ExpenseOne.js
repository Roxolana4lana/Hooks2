import React from 'react'


export default function ExpenseOne({title, id, onDelete}) {
  
  return (
      <div className='myBox'>
          <div className="boxInfo">
         {title}
              <i className="material-icons"
                 onClick={() => onDelete(id)}>delete</i>
           </div>     
    </div>
  )
}

