import { Field, reduxForm } from "redux-form"
import styles from './TaskForm.module.scss'
import { required } from '../../utils/validators'

const TaskForm = (props) => {
    const {handleSubmit, error} = props

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
                {error && <div>{error}</div>}
                <Field name='taskText' component='input' type='text' validate={[required]}/>
                <button type='submit'>Добавить</button>
            </div>
            
        </form>
    )
}

const TaskFormRedux = reduxForm({form: 'task'})(TaskForm)
export default TaskFormRedux