import { createBrowserHistory } from 'history'
import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import taskReducer from 'store/tasksReducer';

const history = createBrowserHistory()

const reducer = combineReducers({
  router: connectRouter(history),
  tasks: taskReducer
})

export { history }

export default reducer
