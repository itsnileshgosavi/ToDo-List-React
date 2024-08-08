import AddToDo from "./components/AddToDo"
import Header from "./components/Header"
import { useState } from "react"
import ToDoList from "./components/ToDoList"


function App() {
  const [todos, setTodos] = useState([])

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const markCompleted = (text) => {
    setTodos(todos.map((todo) => (todo.text === text ? { ...todo, completed: !todo.completed } : todo)))
  }
  
  console.log(todos)

  return (
    <>
      <Header />
      <AddToDo AddToDo={setTodos} todos={todos} />
      <ToDoList todos={todos} handleDelete={handleDelete} markCompleted={markCompleted}/>
    </>
  )
}

export default App
