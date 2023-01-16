import { connect } from 'react-redux'
import styles from './App.module.scss'
import TaskForm from './TaskForm/TaskForm'
import Tasks from './Tasks/Tasks'
import { setTask, deleteAllTasks } from '../redux/tasksReducer'
import { getTasks } from '../selectors'
import {reset} from 'redux-form'
import TaskCounter from '../common/TaskCounter/TaskCounter'
import { useEffect } from 'react'

const App = (props) => {
  const{setTask, tasks, reset, deleteAllTasks} = props

  const submit = (formValue) => {
    setTask(formValue.taskText)
    reset('task')
  }

  useEffect(() => {
    let tasks = document.getElementById("tasks");
    tasks.scrollTop = tasks.scrollHeight;
  })
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
        <header>
          <TaskForm onSubmit={submit} />
        </header>
        <div id='tasks' className={styles.tasks}>
          {tasks.length ? 
          <Tasks /> : 
          <div className={styles.noTasks}>У вас нет задач</div>}
        </div>
        <footer>
          <div className={styles.footerContent}>
            <TaskCounter tasks={tasks.length} title='Все задачи:' />
            <TaskCounter tasks={tasks.filter(task => task.isCompleted === false).length} 
                         title='Активные задачи' />
            <div className={styles.buttonDeleteTasks}>
              <button onClick={() => deleteAllTasks()}>Удалить все</button>
            </div>
          </div>
        </footer>
      </div>
    </div>
    
  );
}

const mapStateToProps = (state) => {
  return{
    tasks: getTasks(state)
  }
}

const AppContainer = connect(mapStateToProps, {setTask, deleteAllTasks, reset})(App)
export default AppContainer;
