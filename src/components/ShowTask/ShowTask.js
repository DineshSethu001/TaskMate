import React from 'react'

export default function ShowTask() {

  const tasks =[
    {id:"1",name:"A",time:"01"},
    {id:"2",name:"B",time:"02"},
    {id:"3",name:"c",time:"03"}
  ]
  return (
    <section className="showTask">
      <div className="head">
        <div>
        <span className='title'>Todo</span>
        <span className="count"> 0 </span>
        </div>
      
      <button className="clearAll">Clear All</button>
      </div>
      <ul>
       {tasks.map((task)=>
       <li>
       <p>
         <span className="name">{task.name}</span>
         <span className='time'>{task.time}</span>
       </p>
       <i className='bi bi-pencil-square'></i>
       <i className="bi bi-trash"></i>
     </li>
      
      )}
      </ul>
    </section>

  )
}
