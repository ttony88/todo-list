const SET_TASK = 'tasks/SET_TASK'
const DELETE_TASK = 'tasks/DELETE_TASK'
const CHANGE_COMPLETED = 'tasks/CHANGE_COMPLETED'
const DELETE_ALL_TASKS = 'tasks/DELETE_ALL_TASKS'

let initialState = {
    tasks: []
}

const tasksReducer = (state=initialState, action) => {

    switch (action.type) {
        case SET_TASK:
            const task = {
                id: Date.now(),
                isCompleted: false,
                taskContent: action.taskText
            }
            return {
                ...state,
                tasks: [...state.tasks, {...task}]
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: [...state.tasks.filter(task => task.id !== action.id)]
            }
        case CHANGE_COMPLETED:
            return {
                ...state, 
                tasks: [...state.tasks.map(task => {
                    if(task.id === action.id){
                        return {
                            ...task,
                            isCompleted: !task.isCompleted 
                        }
                    }
                    return task
                })]
            }
        case DELETE_ALL_TASKS:
            return {
                ...state,
                tasks: []
            }
    
        default:
            return state
            
    }
}
export default tasksReducer

export const setTask = (taskText) => {
    return {type: SET_TASK, taskText}
}

export const deleteTask = (id) => {
    return {type: DELETE_TASK, id}
}

export const changeCompleted = (id) => { 
    return {type: CHANGE_COMPLETED, id}
}

export const deleteAllTasks = () => {
    return {type: DELETE_ALL_TASKS}
}