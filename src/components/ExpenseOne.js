import React from 'react'


export default function ExpenseOne({title, id, onDelete}) {
  
  return (
    <div>
          <ul><li>{title}
              <i className="material-icons"
                 onClick={() => onDelete(id)}>delete</i>
               </li></ul>     
    </div>
  )
}

