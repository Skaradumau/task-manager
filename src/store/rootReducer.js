import { createBrowserHistory } from 'history'
import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import tasksReducer from 'store/tasksReducer'
import subtasksReducer from 'store/subTasksReducer'

const history = createBrowserHistory()

const reducer = combineReducers({
  router: connectRouter(history),
  tasks: tasksReducer,
  subTasks: subtasksReducer,
})

export { history }

export default reducer
