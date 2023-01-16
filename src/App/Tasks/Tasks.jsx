import { connect } from 'react-redux'
import { getTasks } from '../../selectors'
import Task from './Task/Task'
import { deleteTask, changeCompleted } from '../../redux/tasksReducer'

const Tasks = (props) => {
    const {tasks} = props
    
    return(
        <div>
            {tasks.map(task => {
                return <Task task={task} {...props} key={task.id} 
                       />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: getTasks(state)
    }
}

const TasksContainer = connect(mapStateToProps, {deleteTask, changeCompleted})(Tasks)
export default TasksContainer