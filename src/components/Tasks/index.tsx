import { Task } from '../Task'
import styles from './styles.module.css'

export function Tasks() {
  return (
    <section className={styles.tasksContainer}>
      <header className={styles.tasksHeader}>
        <div>
          <p className={styles.totalTasks}>
            Tarefas criadas
            <span className={styles.quantity}>5</span>
          </p>
        </div>
        <div>
          <p className={styles.completedTasks}>
            Concluídas
            <span className={styles.quantity}>2 de 5</span>
          </p>
        </div>
      </header>
      <div>
        <Task />
      </div>
    </section>
  )
}
