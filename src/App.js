import React, { useState } from 'react'
import Header from './components/Header/Header'
import ShowTask from './components/ShowTask/ShowTask'
import AddTask from './components/AddTask/AddTask'
import './App.css'

export default function   () {
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="container">
      <Header/>
      <AddTask taskList={taskList} setTaskList={setTaskList} />
      <ShowTask taskList={taskList} setTaskList={setTaskList} />
    </div>
  )
}
