import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'components/atoms'
import { TaskTile } from 'components/molecules'
import { TasksContainer } from './Tasks.styles'

const Tasks = () => {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks.value)

  const createTask = useCallback(() => dispatch({ type: 'CREATE_TASK' }), [dispatch])

  useEffect(() => {
    dispatch({ type: 'TASKS_REQUESTED' })
  }, [dispatch])

  const tasksList = () =>
    tasks.map(task => (
      <TaskTile task={task} key={task.id}>
        {task.title}
      </TaskTile>
    ))

  return (
    <TasksContainer>
      <h1>Processes</h1>
      <Button onClick={createTask} primary>
        Create task
      </Button>
      {tasksList()}
    </TasksContainer>
  )
}

export default Tasks
