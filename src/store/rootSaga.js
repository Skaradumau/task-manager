import { all, takeEvery, put } from 'redux-saga/effects'
import { fetchTasksAPI, createTaskAPI, deleteTaskAPI } from 'api/tasks'
import { setTasks, addTask, removeTask } from 'store/tasksReducer'
import { fetchSubTasksAPI, createSubTaskAPI, deleteSubtaskAPI } from 'api/subTasks'
import { setSubTasks, addSubTask, removeSubTask } from 'store/subTasksReducer'

export function* fetchTasks() {
  const tasks = yield fetchTasksAPI()

  yield put(setTasks(tasks))
}

export function* watchTasksFetch() {
  yield takeEvery('TASKS_REQUESTED', fetchTasks)
}

export function* createTask() {
  const task = yield createTaskAPI()

  yield put(addTask(task))
}

export function* watchTaskCreation() {
  yield takeEvery('CREATE_TASK', createTask)
}

export function* deleteTask(action) {
  const deleted = yield deleteTaskAPI(action.payload)

  if (!deleted) return

  yield put(removeTask(deleted))
}

export function* watchTaskDelete() {
  yield takeEvery('DELETE_TASK', deleteTask)
}

export function* fetchSubTasks(action) {
  yield put(setSubTasks([]))

  const subTasks = yield fetchSubTasksAPI(action.payload)

  yield put(setSubTasks(subTasks))
}

export function* watchSubTasksFetch() {
  yield takeEvery('SUBTASKS_REQUESTED', fetchSubTasks)
}

export function* createSubTask(action) {
  const subTask = yield createSubTaskAPI(action.payload)

  yield put(addSubTask(subTask))
}

export function* watchSubTaskCreation() {
  yield takeEvery('CREATE_SUBTASK', createSubTask)
}

export function* deleteSubTask(action) {
  const deleted = yield deleteSubtaskAPI(action.payload)

  if (!deleted) return

  yield put(removeSubTask(deleted))
}

export function* watchSubTaskDelete() {
  yield takeEvery('DELETE_SUBTASK', deleteSubTask)
}

export default function* () {
  yield all([
    watchTasksFetch(),
    watchTaskCreation(),
    watchTaskDelete(),
    watchSubTasksFetch(),
    watchSubTaskCreation(),
    watchSubTaskDelete(),
  ])
}
