import ToDoItem from "./ToDoItem"

const ToDoList = (props) => {
  return (
    <>
    {props.todos.map((todo) => (
      <ToDoItem key={todo.id} todo={todo} handleDelete={props.handleDelete} markCompleted={props.markCompleted} />
    ))}
    </>
  )
}

export default ToDoList