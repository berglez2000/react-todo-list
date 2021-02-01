import Todo from "./Todo"

const TodoContainer = ({ todos, onDelete, onComplete, doubleClick }) => {

  return (
    <div className="todo__container">
      {todos.map(todo => {
        return <Todo important={todo.important} doubleClick={doubleClick} completed={todo.completed} onComplete={onComplete} onDelete={onDelete} key={todo.id} id={todo.id} task={todo.task} />
      })}
    </div>
  )
}

export default TodoContainer
