import { useState } from 'react'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import './App.css'

function App() {
  const [todos, setTodos] = useState(['todo 1', 'todo 2', 'todo 3', 'todo 4'])

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  )
}

export default App
