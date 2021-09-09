import React from 'react'

const Footer = ({ todos, setTodos, activeFilter, setActiveFilter }) => {

  const handleClearCompleted = () => {
    setTodos(todos => todos.filter(t => !t.completed))
  }

  return (
    <footer className="footer">

      <span className="todo-count">
        <strong>{todos.filter(t => !t.completed).length + " "}</strong>
        items left
      </span>

      <ul className="filters">
        <li onClick={() => setActiveFilter("All")}>
          <a className={activeFilter === "All" ? "selected" : ""}>All</a>
        </li>
        <li onClick={() => setActiveFilter("Active")}>
          <a className={activeFilter === "Active" ? "selected" : ""}>Active</a>
        </li>
        <li onClick={() => setActiveFilter("Completed")}>
          <a className={activeFilter === "Completed" ? "selected" : ""}>Completed</a>
        </li>
      </ul>

      {
        todos.filter(t => t.completed).length > 0
        &&
        <button onClick={handleClearCompleted} className="clear-completed">
          Clear completed
        </button>
      }
    </footer>
  )
}

export default Footer;