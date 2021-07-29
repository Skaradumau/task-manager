import Storage from 'utils/storage'
import delay from 'utils/delay'

export default delay((task) => {
  const tasks = Storage.tasks.get()
  const subTasks = Storage.subTasks.get()

  Storage.tasks.set(tasks.filter(t => t.id !== task.id))
  Storage.subTasks.set(subTasks.filter(t => t.taskId !== task.id))

  return task
})
