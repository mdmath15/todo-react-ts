import styles from './styles.module.css'

export function Tasks() {
  return (
    <section className={styles.tasksContainer}>
      <header className={styles.tasksHeader}>
        <p className={styles.totalTasks}>
          Tarefas criadas
          <span className={styles.quantity}>5</span>
        </p>
        <p className={styles.completedTasks}>
          Concluídas
          <span className={styles.quantity}>2 de 5</span>
        </p>
      </header>
      <div>Tasks List</div>
    </section>
  );
}
