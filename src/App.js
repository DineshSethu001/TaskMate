import React from 'react'
import Header from './components/Header/Header'
import ShowTask from './components/ShowTask/ShowTask'
import AddTask from './components/AddTask/AddTask'
import './App.css'

export default function   () {
  return (
    <div className="container">
      <Header/>
      <AddTask/>
      <ShowTask/>
    </div>
  )
}
