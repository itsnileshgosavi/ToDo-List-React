import { useState } from "react"

const ToDoItem = ({todo, handleDelete , markCompleted}) => {
    const [completed, setCompleted] = useState(todo.completed);
    const [todoState, setTodoState] = useState(todo.text);
    const [edit, setEdit] = useState(false);
    const editText = () => {
        setEdit(!edit) 
    }
  return (
    <div className="flex justify-center items-center space-x-3 my-3">
        {completed && <p>✅</p>}
        {edit? <input type="text" onChange={(e) => {setTodoState(e.target.value)}} onKeyDown={(e) => {e.key === "Enter" && editText()}} value={todoState} /> :<p className="w-56 text-2xl">{todoState}</p>}
        <button className="bg-red-600 text-white p-3 rounded-lg active:scale-95" onClick={() => handleDelete(todo.id)}>Delete</button>
        <button className="bg-blue-600 text-white p-3 rounded-lg active:scale-95" onClick={() => {editText()}}>{edit ? "Save" : "Edit"}</button>
        <button className="bg-green-600 text-white p-3 rounded-lg active:scale-95" onClick={() => {setCompleted(!completed); markCompleted(todo.text)}}>{completed ? "mark Pending" :   "mark Done"}</button>
    </div>
  )
}

export default ToDoItem