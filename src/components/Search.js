import { useState } from 'react'

const Search = ({ onAdd }) => {
  const [task, setTask] = useState("")
  const [id, setId] = useState("")
  const [completed, setCompleted] = useState(false)
  const [important, setImportant] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!task){
      alert("Please enter task")
      return
    }

    onAdd({task, id, completed, important})
    setTask("")
    setId("")
    setCompleted(false)
    setImportant(false)
  }

  return (
    <header>
      <h1>My Todo App</h1>
      <form onSubmit={onSubmit} >
        <input value={task} placeholder="Add Todo..." type="text" onChange={(e) => {
          setTask(e.target.value)
        }} />
        <button>Add</button>
      </form>
    </header>
  )
}

export default Search
