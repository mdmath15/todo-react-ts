import styles from "./styles.module.css"
import { PlusCircle } from "phosphor-react"

export function NewTaskForm() {
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="new-task"
        id="new-task"
        placeholder="Adicione uma nova tarefa"
      />
      <button className={styles.button} type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}
