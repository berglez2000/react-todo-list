
const Todo = ({ task, id, onDelete, onComplete, completed, doubleClick, important }) => {

  return (
    <div onDoubleClick={() => doubleClick(id)} className={`todo ${completed ? "completed" : ""} ${important ? "important" : ""}`} key={id} >
      <p className="task">{task}</p>
      <div className="icons">
        <button className="check" onClick={() => onComplete(id)} ><i className="fas fa-check"></i></button>
        <button className="trash" onClick={() => onDelete(id)} ><i className="fas fa-trash"></i></button>
      </div>
    </div>
  )
}

export default Todo
