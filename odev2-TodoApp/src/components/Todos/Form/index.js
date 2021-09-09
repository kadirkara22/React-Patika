import React, {useState} from 'react'

const Form=({setTodos})=> {

    const [todo,setTodo]=useState("");

    const handleKeyPress=(e)=>{
     if(e.key==="Enter"){
    const newTodo={
        name:todo,
        completed:false
    }
    setTodo((todos)=> todos.concat(newTodo))
    setTodo("");
}
    }
    return (
        <div>
        <input
        onKeyPress={handleKeyPress}
        value={todo}
        onChange={e => setTodo(e.target.value)}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus />
        </div>
    )
}

export default Form;
