import { all, takeEvery, delay, put } from 'redux-saga/effects'
import { fetchTasksAPI, createTaskAPI, deleteTaskAPI } from 'api/tasks'
import { setTasks, addTask, removeTask } from 'store/tasksReducer'

export function* watchTasksFetch() {
  yield takeEvery('TASKS_REQUESTED', fetchTasks)
}

export function* watchTaskCreation() {
  yield takeEvery('CREATE_TASK', createTask)
}

export function* watchTaskDelete() {
  yield takeEvery('DELETE_TASK', deleteTask)
}

export function* fetchTasks() {
  const tasks = yield fetchTasksAPI()
  yield put(setTasks(tasks))
}

export function* createTask() {
  const task = yield createTaskAPI()
  yield put(addTask(task))
}

export function* deleteTask(action) {
  const deleted = yield deleteTaskAPI(action.payload)
  yield put(removeTask(deleted))
}

export default function* () {
  yield all([
    watchTasksFetch(),
    watchTaskCreation(),
    watchTaskDelete()
  ])
}
