import { useState } from "react";

const AddToDo = ({AddToDo, todos}) => {
    const [input, setInput] = useState('');
    const [error, setError] = useState('');
    const [key, setKey] = useState(todos[todos.length - 1]?.id || 0);//creating a unique key for each todo
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
       AddToDo([...todos, {text: input, completed: false, id: key + 1}]);
       setKey(key + 1); //increamenting the key
       setInput('')
       e.target.reset();
       setError('');
    }
  return (
    <>
      <form onSubmit={(e)=>{handleSubmit(e)}} className="w-full flex justify-center my-5" autoComplete="off">
        <div className="w-60 h-12 relative flex rounded-xl">
          <input type="text" onChange={(e)=>{setInput(e.target.value)}} onKeyDown={(e)=>{e.key === 'Enter' && handleSubmit(e)}} value={input} className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-[#4070f4] focus:shadow-md" id="todo" placeholder=" "/>
          <label
            className={`absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] transition-all duration-150 ${error ? "text-red-500 peer-focus:text-red-500" : ""}`}
            for="todo"
          >
           Add a To Do</label>
        </div>
          <button type="submit" className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
            border-blue-600
            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] mx-4">Add</button>
      </form>
      {error && <p className="text-red-600 text-center">{error}</p>}
    </>
    
  );
};

export default AddToDo;
