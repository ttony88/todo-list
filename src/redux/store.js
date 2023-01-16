import { combineReducers, createStore} from 'redux'
import { reducer as formReducer } from 'redux-form'
import tasksReducer from './tasksReducer'

let reducers = combineReducers({
    tasks: tasksReducer,
    form: formReducer
})

let store = createStore(reducers)

export default store