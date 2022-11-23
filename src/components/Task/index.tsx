import styles from './styles.module.css'
import { Check, Trash } from 'phosphor-react'
import { ITask } from '../../App'

interface TaskProps {
  task: ITask
  toggleTaskDone: (taskId: number) => void
  deleteTask: (taskId: number) => void
}

export function Task({ task, toggleTaskDone, deleteTask }: TaskProps) {
  function handleToggleTaskDone() {
    toggleTaskDone(task.id)
  }

  function handleDeleteTask() {
    deleteTask(task.id)
  }

  return (
    <div className={styles.container}>
      <button
        onClick={handleToggleTaskDone}
        type="button"
        className={task.done ? styles.checked : styles.unchecked}
      >
        {task.done && <Check size={10} />}
      </button>
      <p className={task.done ? styles.done : ''}>{task.description}</p>
      <button className={styles.delete} onClick={handleDeleteTask}>
        <Trash size={16} weight="bold" />
      </button>
    </div>
  )
}
