import React, { Component } from 'react'
import '../styles/App.scss'
import Expenses from './Expenses';
import {Route, BrowserRouter} from 'react-router-dom'


export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div className='App'>
               <Route exact path='/' component={Expenses}/>
               
            </div>
            </BrowserRouter>
        )
    }
}
