import React from 'react'
import axios from 'axios'

import ExpenseOne from './ExpenseOne';
import useExpensesList from '../containers/useExpensesList';

export default function Expenses() {
    const expenses = useExpensesList()
    function onDelete(id) {
        console.log(id)
        axios.delete(`http://127.0.0.1:8000/expenses/${id}/`)
    }
    
  return (
    <div>
      {expenses.map((expense,index)=>(
              <ExpenseOne key={index} title={expense.title} index={index} id={expense.id} onDelete={onDelete}/>
      ))}
    </div>
  )
}
