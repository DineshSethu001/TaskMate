
export default function AddTask() {
  return (
    <section className="addTask">
      <form>
          <input autocomplete="off" type="text" name="task" placeholder="addTask" maxLength="25"/>
          <button className="submit">Add</button>
      </form>
    </section>
  )
}
