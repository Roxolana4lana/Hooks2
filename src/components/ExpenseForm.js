import React, { useState } from 'react'
import axios from 'axios'
import Portal from './Portal';
import Conclusion from './Conclusion';

export default function ExpenseForm() {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")

    const [titleError, settitleError] = useState('')
    const [categoryError, setcategoryError] = useState('')
    const [amountError, setamountError] = useState('')

    const [open, setOpen] = useState(false)

    const handleOpen = e => {
        setOpen(true)
    }
    const handleClose = e => {
        setOpen(false)
    }


    function Validate(){
        console.log(title.length)
        if(title.length<3){
            settitleError('minimum 3 characters')
            }
        if (category.length < 3) {
            setcategoryError('minimum 3 characters')
           }
        if (isNaN(amount)) {
            setamountError('minimum 3 characters')
          }
          if(titleError || categoryError ||amountError){
              return false
          }

       
         else {
            return true
        }
    }
       
    
    
const handleSubmit=e=>{
    e.preventDefault();
    if (Validate()) {
       const obj = {
           title,
           category,
           amount,
       }
    axios.post(`http://127.0.0.1:8000/expenses/`, obj)
        .catch(error => {
            throw (error)
        })
        handleReset()
    
    }else{
        console.log('Not valid properties')
    }
   
}
function handleReset(){
    setAmount('')
    setCategory('')
    setTitle('')
}
   
    
  return (
    <div>
          <form onSubmit={handleSubmit} className='formExpenses'>
              <div className="form-group">
          <label>Title</label>
          <input 
                      onChange={e => setTitle(e.target.value)} className="form-control"/>
                  </div>
              <div className='errorMessage'><div>{titleError}</div></div>
              <div className="form-group">
          <label>category</label>
              <input
                      onChange={e => setCategory(e.target.value)} className="form-control" />
               </div>
              <div className='errorMessage'><div>{categoryError}</div></div>
              <div className="form-group">
          <label>amount</label>
                  <input onChange={e => setAmount(e.target.value)} className="form-control"/>
              </div>
              <div className='errorMessage'><div>{amountError}</div></div>
              <button className="btn-save">add</button>
              <button type="button" className="btn-save" onClick={() => setAmount(null)
   
             }>Reset
            </button>
          </form>
          <button className="btn-save" onClick={handleOpen}>See details</button>
          {open ? (
              <Portal handleClose={handleClose}>holla <Conclusion /> </Portal>
          ) : null}
    </div>
  )
}

