import React, { useState } from 'react'
import axios from 'axios'
import ExpenseForm from './ExpenseForm';
import ExpenseOne from './ExpenseOne';
import useExpensesList from '../containers/useExpensesList';


export default function Expenses() {

    const expenses = useExpensesList()
    function onDelete(id) {
        console.log(id)
        axios.delete(`http://127.0.0.1:8000/expenses/${id}/`)
            .catch(error => {
                throw (error)
            })

    }
   
  return (
      <div className='App'>
          <div className="split expenses_lising">
    
      {expenses.map((expense,index)=>(
              <ExpenseOne key={index} title={expense.title} index={index} id={expense.id} onDelete={onDelete}/>
      ))}
      </div>
          <div className="split App_Form">
          <ExpenseForm />
    </div>
    </div>
  )
}
