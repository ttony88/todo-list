import { useEffect, useState } from "react"
import styles from './Task.module.scss'

const Task = (props) => {
    const{tasks, task, deleteTask, changeCompleted} = props

    const [index, setIndex] = useState(0)
    
    useEffect(() => {setIndex(tasks.indexOf(task) + 1)})

    return(
        <div className={styles.taskContent}>
            <div className={styles.index}>
                <div>{index}</div>
            </div>
            <div className={styles.task}>
                <label>
                    <input type='checkbox' checked={task.isCompleted}
                           onChange={() => changeCompleted(task.id)}
                    />
                    <svg
                        className={styles.checkBox + ' ' + 
                        `${task.isCompleted ? styles.checkBoxActive : ''}`}
                        aria-hidden="true"
                        viewBox="0 0 15 11"
                        fill="none"
                    >
                        <path
                        d="M1 4.5L5 9L14 1"
                        strokeWidth="2"
                        stroke={task.isCompleted ? "#fff" : "none"} 
                        />
                    </svg>
                </label>
                
                
                <div className={!task.isCompleted ? 
                    styles.taskText : 
                    styles.completedTask}>
                        {task.taskContent}
                    </div>
                <div className={styles.button}>
                   <button onClick={() => deleteTask(task.id)}>x</button> 
                </div>
                
            </div>
        </div>
    )
}
export default Task