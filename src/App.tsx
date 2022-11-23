import { Header } from './components/Header'
import styles from './App.module.css'
import './styles/global.css'
import { NewTaskForm } from './components/NewTaskForm'
import { Tasks } from './components/Tasks'
import { useState } from 'react'

export interface ITask {
  id: number
  description: string
  done: boolean
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  function createNewTask(input: string) {
    const newTask = {
      id: tasks.length + 1,
      description: input,
      done: false,
    }

    setTasks((state) => [...state, newTask])
  }

  function toggleTaskDone(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          done: !task.done,
        }
      } else {
        return task
      }
    })

    setTasks(newTasks)
  }

  function deleteTask(taskId: number) {
    const newTasks = tasks.filter((task) => {
      return task.id !== taskId
    })

    setTasks(newTasks)
  }

  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <NewTaskForm createNewTask={createNewTask} />
        <Tasks
          tasks={tasks}
          toggleTaskDone={toggleTaskDone}
          deleteTask={deleteTask}
        />
      </main>
    </div>
  )
}
