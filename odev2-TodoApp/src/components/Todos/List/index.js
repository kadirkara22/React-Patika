import React from 'react';
import Todo from './Todo';

function List({todos, setTodos}) {
    return (
        <div>
             <ul className="todo-list">
            {todos.map(todo => (
                <Todo key={todo.name} todo={todo} setTodos={setTodos}/>
            ))}
             </ul>
        </div>
    )
}

export default List;
