import { Header } from "./components/Header"
import styles from './App.module.css'
import "./styles/global.css"
import { NewTaskForm } from "./components/NewTaskForm"

export function App() {
  return (
   <div>
    <Header/>
    <main className={styles.wrapper}>
      <NewTaskForm/>
    </main>
   </div>
  )
}

