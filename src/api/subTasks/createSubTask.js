import faker from 'faker'
import Storage from 'utils/storage'
import delay from 'utils/delay'
import { labels } from '../config'
import { getRandomNumber } from '../utils'

export default delay(taskId => {
  const subTasks = Storage.subTasks.get()

  const newSubTask = {
    id: faker.datatype.uuid(),
    taskId,
    title: faker.lorem.sentence(),
    labels: [
      ...new Set(
        Array.from({ length: getRandomNumber(1, 5) }).map(() => labels[getRandomNumber(0, 9)]),
      ),
    ],
  }

  Storage.subTasks.set([...subTasks, newSubTask])

  return newSubTask
})
