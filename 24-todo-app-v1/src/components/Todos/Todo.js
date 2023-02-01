import 'remixicon/fonts/remixicon.css'
import styles from './Todo.module.css'

function Todo({ todo }) {
  return (
    <div className={styles.todo}>
      <i class="ri-file-list-fill"></i>
      <span>{todo}</span>
    </div>
  )
}

export default Todo
