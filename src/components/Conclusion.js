import React, {useState} from 'react'
import useExpensesList from '../containers/useExpensesList';

export default function Conclusion() {
    const expenses = useExpensesList()
    let initVal = 0
    let sumExpenses = expenses.reduce((accumulator,currentValue)=>{
        return accumulator + currentValue.amount
    },initVal )
 
  return (
    <div>
      <h1>the total is {sumExpenses}</h1>
    </div>
  )
}
