import React from 'react'

import useExpensesList from './useExpensesList';

export default function Expenses() {
    const expenses = useExpensesList()
  return (
    <div>
      {expenses.map(expense=>(
          <ul key={expense.id}><li>{expense.title}</li></ul>
      ))}
    </div>
  )
}
