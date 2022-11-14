import styles from './styles.module.css'
import { Check, Trash } from 'phosphor-react'
import { useState } from 'react'

export function Task() {
  const [checked, setChecked] = useState(false)
  return (
    <div className={styles.container}>
      <button
        onClick={() => setChecked(!checked)}
        type="button"
        className={checked ? styles.checked : styles.unchecked}
      >
        {checked && <Check size={10} />}
      </button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
        vero aspernatur, nihil in dicta pariatur iure?
      </p>
      <button className={styles.delete}>
        <Trash size={16} weight="bold" />
      </button>
    </div>
  )
}
