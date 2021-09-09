import React from 'react'

const Todo=({ todo, setTodos }) =>{

    const handleDelete = (name) => {
        setTodos(todos => todos.filter(t => t.name !== name))
      }
    
    const handleToggle = (name) => {
        setTodos(todos => todos.map(t => t.name === name ? {...t, completed: !t.completed} : t))
      }
    return (
        <div>
            <li className={todo.completed ? "completed" : ""}>
                <div className="view">
                    <input onChange={() => handleToggle(todo.name)}
                     className="toggle" type="checkbox" checked={todo.completed} />
                    <label>{todo.name}</label>
                    <button onClick={() => handleDelete(todo.name)} className="destroy"></button>
                </div>
           </li>
        </div>
    )
}

export default Todo;
