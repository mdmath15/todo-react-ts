import { ITask } from '../../App'
import { Task } from '../Task'
import emptyImg from '../../assets/empty.svg'
import styles from './styles.module.css'

interface TasksProps {
  tasks: ITask[]
  toggleTaskDone: (taskId: number) => void
  deleteTask: (taskId: number) => void
}

export function Tasks({ tasks, toggleTaskDone, deleteTask }: TasksProps) {
  const tasksDone = tasks.filter((task) => {
    return task.done === true
  })

  return (
    <section className={styles.tasksContainer}>
      <header className={styles.tasksHeader}>
        <div>
          <p className={styles.totalTasks}>
            Tarefas criadas
            <span className={styles.quantity}>{tasks.length}</span>
          </p>
        </div>
        <div>
          <p className={styles.completedTasks}>
            Concluídas
            <span className={styles.quantity}>
              {tasksDone.length} de {tasks.length}
            </span>
          </p>
        </div>
      </header>

      {tasks.length ? (
        <div>
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                task={task}
                toggleTaskDone={toggleTaskDone}
                deleteTask={deleteTask}
              />
            )
          })}
        </div>
      ) : (
        <div className={styles.empty}>
          <div className={styles.emptyContent}>
            <img src={emptyImg} alt="" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      )}
    </section>
  )
}
