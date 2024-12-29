
export default function AddTask({taskList, setTaskList}) {

  const handleSubmit = (e) =>{

    e.preventDefault();
    const date = new Date();
    const newTask = 
    {
      id:date.getTime(),
      name:e.target.task.value,
      time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    }
    setTaskList([...taskList, newTask]);


  }
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
          <input autocomplete="off" type="text" name="task" placeholder="addTask" maxLength="25"/>
          <button className="submit">Add</button>
      </form>
    </section>
  )
}
