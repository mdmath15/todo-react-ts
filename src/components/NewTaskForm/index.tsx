import styles from './styles.module.css'
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

interface NewTaskFormProps {
  createNewTask: (input: string) => void
}

export function NewTaskForm({ createNewTask }: NewTaskFormProps) {
  const [newTaskInput, setNewTaskInput] = useState('')

  function handleCreateNewTask(e: FormEvent) {
    e.preventDefault()

    createNewTask(newTaskInput)
    setNewTaskInput('')
  }

  return (
    <form className={styles.form} onSubmit={handleCreateNewTask}>
      <input
        className={styles.input}
        type="text"
        name="new-task"
        id="new-task"
        placeholder="Adicione uma nova tarefa"
        value={newTaskInput}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNewTaskInput(e.target.value)
        }
        required
      />
      <button className={styles.button} type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}
