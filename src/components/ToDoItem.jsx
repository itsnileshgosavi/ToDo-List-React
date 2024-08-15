import { useState } from "react"

const ToDoItem = ({todo, handleDelete , markCompleted, handleEdit}) => {
    const [completed, setCompleted] = useState(todo.completed);
    const [todoState, setTodoState] = useState(todo.text);
    const [edit, setEdit] = useState(false);
    const editText = () => {
        setEdit(!edit) 
    }
  return (
    <div className="flex justify-center items-center space-x-3 my-3">
       {/* Conditionally rendering the completed icon and  input field based on the completed state */}
        {completed && 
          <p className="text-2xl md:text-4xl">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
              <linearGradient id="IMoH7gpu5un5Dx2vID39Ra_pIPl8tqh3igN_gr1" x1="9.858" x2="38.142" y1="9.858" y2="38.142" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#9dffce"></stop><stop offset="1" stop-color="#50d18d"></stop></linearGradient><path fill="url(#IMoH7gpu5un5Dx2vID39Ra_pIPl8tqh3igN_gr1)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><linearGradient id="IMoH7gpu5un5Dx2vID39Rb_pIPl8tqh3igN_gr2" x1="13" x2="36" y1="24.793" y2="24.793" gradientUnits="userSpaceOnUse"><stop offset=".824" stop-color="#135d36"></stop><stop offset=".931" stop-color="#125933"></stop><stop offset="1" stop-color="#11522f"></stop></linearGradient><path fill="url(#IMoH7gpu5un5Dx2vID39Rb_pIPl8tqh3igN_gr2)" d="M21.293,32.707l-8-8c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414	c0.391-0.391,1.024-0.391,1.414,0L22,27.758l10.879-10.879c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414	c0.391,0.391,0.391,1.024,0,1.414l-13,13C22.317,33.098,21.683,33.098,21.293,32.707z"></path>
              </svg>
          </p>} 
        {edit? <input className="w-56 text-2xl bg-slate-200 rounded-xl p-2" type="text" onChange={(e) => {setTodoState(e.target.value)}} onKeyDown={(e) => {e.key === "Enter" && editText()}} value={todoState} /> :<p className="w-56 text-md md:text-2xl">{todoState}</p>}
        <button className="cursor-pointer transition-all bg-red-500 text-white px-2 md:px-6 py-2 rounded-lg border-red-600 text-sm border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" onClick={() => handleDelete(todo.id)}>Delete</button>
        <button className="cursor-pointer transition-all bg-blue-500 text-white px-2 md:px-6 py-2 rounded-lg border-blue-600 text-sm border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" onClick={() => {editText(); handleEdit(todo.id, todoState)}}>{edit ? "Save" : "Edit"}</button>
        <button className="cursor-pointer transition-all bg-green-500 text-white px-0 md:px-6 py-2 rounded-lg border-green-600 text-sm border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" onClick={() => {setCompleted(!completed); markCompleted(todo.id)}}>{completed ? "Mark Pending" :   "Mark Done"}</button>
    </div>
  )
}

export default ToDoItem