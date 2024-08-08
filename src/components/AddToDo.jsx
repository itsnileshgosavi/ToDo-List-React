import { useState } from "react";

const AddToDo = ({AddToDo, todos}) => {
    const [input, setInput] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
       e.preventDefault();
       if(!input || !input.trim() ) {
          setError('Todo cannot be empty');
          return;
       };
       if(todos.find((todo) => todo.text === input)) {
          setError('Todo already exists, add some other');
          return;
       };
       AddToDo([...todos, {text: input, completed: false, id: Math.random()}]);
       setInput('')
       e.target.reset();
       setError('');
    }
  return (
    <>
      <form onSubmit={(e)=>{handleSubmit(e)}} className="w-full flex justify-center my-5" autoComplete="off">
          <input type="text" placeholder="Add ToDo" onChange={(e)=>{setInput(e.target.value)}} onKeyDown={(e)=>{e.key === 'Enter' && handleSubmit(e)}} value={input} className="bg-slate-200 rounded-xl placeholder:text-black placeholder:px-4 mx-3"/>
          <button type="submit" className="p-3 rounded-xl bg-blue-600 active:scale-95 text-white">Add</button>
      </form>
      {error && <p className="text-red-600 text-center">{error}</p>}
    </>
    
  );
};

export default AddToDo;
