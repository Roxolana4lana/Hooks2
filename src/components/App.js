import React, { Component } from 'react'
import '../styles/App.scss'
import Expenses from './Expenses';
import ExpenseForm from './ExpenseForm';


export default class App extends Component {
    render() {
        return (
            <div className='App'>
                <h1>My react app</h1>
                <ExpenseForm/>
                <Expenses/>
            </div>
        )
    }
}
