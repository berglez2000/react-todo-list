import { useState } from 'react'
// Components
import Search from "./components/Search"
import TodoContainer from "./components/TodoContainer"

const App = () => {
  const [todos, setTodos] = useState([])


  // Add Todo
  const addTodo = (todo) => {
    const id = Math.floor(Math.random() * 100000)
    
    const newTask = { ...todo, id }
    setTodos([...todos, newTask])
  }

  //Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  //Complete Todo
  const completeTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  //On double click
  const onDoubleClick = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, important: !todo.important} : todo))
  }

  return (
    <div className="container">
      <Search onAdd={addTodo} />
      {todos.length > 0 ? <TodoContainer doubleClick={onDoubleClick} onComplete={completeTodo} onDelete={deleteTodo} todos={todos} /> : "Empty Todo List"}
    </div>
  )
}

export default App
