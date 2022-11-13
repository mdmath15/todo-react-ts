import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./styles/global.css";
import { NewTaskForm } from "./components/NewTaskForm";
import { Tasks } from "./components/Tasks";

export function App() {
  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <NewTaskForm />
        <Tasks/>
      </main>
    </div>
  );
}
