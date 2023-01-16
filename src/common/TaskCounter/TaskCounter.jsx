import styles from './TaskCounter.module.scss'

const TasksCount = (props) => {
    const {tasks, title} = props
    return(
        <div className={styles.taskCounter}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.countTasks}>
                <div className={styles.circle}>
                    {tasks}  
                </div>
            </div>
        </div>
    )
}
export default TasksCount