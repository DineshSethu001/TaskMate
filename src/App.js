import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import ShowTask from './components/ShowTask/ShowTask'
import AddTask from './components/AddTask/AddTask'
import './App.css'

export default function App() {

  //which is used to store the array
  const [taskList, setTaskList] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('taskList')) || [];
    } catch (error) {
      console.error('Failed to parse taskList from localStorage:', error);
      return [];
    }
  });

  //it is used to edit the item which is selected
  const [task, setTask] = useState({})

  useEffect(()=>{
    localStorage.setItem("taskList", JSON.stringify(taskList))
  },[taskList])
  return (
    <div className="container">
      <Header/>
      <AddTask 
        taskList={taskList} 
        setTaskList={setTaskList} 
        task = {task}
        setTask = {setTask}
      />
      <ShowTask 
        taskList={taskList} 
        setTaskList={setTaskList}
        task = {task}
        setTask = {setTask}
     />
    </div>
  )
}
  