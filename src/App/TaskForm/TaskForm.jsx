import { Field, reduxForm } from "redux-form"
import styles from './TaskForm.module.scss'
import { required, maxLength50 } from '../../utils/validators'
import { Input } from "../FormControl/FormControl"

const TaskForm = (props) => {
    console.log(props)
    const {handleSubmit} = props

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <Field name='taskText' component={Input} type='text' validate={[required, maxLength50]}/>
            <button type='submit'>Добавить</button>
        </form>
    )
}

const TaskFormRedux = reduxForm({form: 'task'})(TaskForm)
export default TaskFormRedux