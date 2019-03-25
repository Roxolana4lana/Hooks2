import React, { useState, useEffect} from 'react'
import axios from 'axios'

export default function useExpensesList() {
    const [expenses, setExpenses] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/expenses/')
            .then(res => setExpenses(res.data))
            .catch(error => {
                throw (error)
            })
    })
  return expenses
}
