import { all, takeEvery, delay } from 'redux-saga/effects'
import { fetchTasks } from 'api/tasks'

export function* watchTasksFetch() {
  yield takeEvery('TASKS_REQUESTED', doSomething)
}

export function* doSomething() {
  const tasks = yield fetchTasks()
  yield put({ type: 'TASKS_RECEIVED', tasks })
}

export default function* () {
  yield all([
    watchTasksFetch()
  ])
}
