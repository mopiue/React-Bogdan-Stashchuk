import { useState } from 'react'
import styles from './TodoForm.module.css'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()

    addTodo(text)
    setText('')
  }

  return (
    <form className={styles.TodoForm} onSubmit={onSubmitHandler}>
      <input
        className={styles.todoInput}
        placeholder="Enter new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className={styles.todoSubmit} type="submit">
        Submit
      </button>
    </form>
  )
}

export default TodoForm
