import React, { useState } from 'react'
import axios from 'axios'

export default function ExpenseForm() {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")
    
const handleSubmit=e=>{
    e.preventDefault();
       const obj = {
           title,
           category,
           amount,
       }
    axios.post(`http://127.0.0.1:8000/expenses/`, obj)
        .catch(error => {
            throw (error)
        })
   setAmount('')
   setCategory('')
   setTitle('')
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input 
                  onChange={e => setTitle(e.target.value)}/>
          <label>category</label>
              <input
               onChange={e => setCategory(e.target.value)} />
          <label>amount</label>
              <input  onChange={e => setAmount(e.target.value)} />
          <button >add</button>
          </form>
    </div>
  )
}

