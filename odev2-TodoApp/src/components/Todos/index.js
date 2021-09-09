import React,{useState} from 'react';
import Form from "./Form";
import List from './List'
import Footer from './List/Footer'

const Todos=()=> {
    const [todos, setTodos] = useState(
        [
            { name: "Sabah 7'de kalk", completed: true },
             { name: "Javascript çalış", completed: false },
             { name: "Youtube  videosu  izle", completed: false },
             { name: "React çalış", completed: true }
        ]
             
             )

    const [activeFilter, setActiveFilter] = useState("All")

    let filtered = todos
    if (activeFilter === "Active") {
      filtered = todos.filter(t => !t.completed)
    } else if (activeFilter === "Completed") {
      filtered = todos.filter(t => t.completed)
    } 

    return (
        <div>
         <section className="todoapp">
                    <header className="header">
                        <h1>todos</h1>
                        <Form setTodos={setTodos} />
                        <List todos={filtered} setTodos={setTodos} todos={todos} />
                        <Footer
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                        todos={filtered}
                        setTodos={setTodos}
                        />
                    </header>
        </section >
        </div>
    )
}

export default Todos;