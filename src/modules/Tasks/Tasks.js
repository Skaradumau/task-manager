import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'components/atoms'
import { TaskTile } from 'components/molecules'

const Tasks = () => {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks.value)

  const createTask = useCallback(() => dispatch({type: 'CREATE_TASK'}), [dispatch])
  const fetchTasks = useCallback(() => dispatch({type: 'TASKS_REQUESTED'}), [dispatch])

  useEffect(() => {
    dispatch({ type: 'TASKS_REQUESTED' })
  }, [dispatch])

  const tasksList = () => (
    tasks.map(task => <TaskTile
        task={task}
        key={task.id}
      >
        {task.title}
      </TaskTile>
    )
  )

  return <div>
    <h1>Processes</h1>
    <Button onClick={createTask}>Create</Button>
    <Button onClick={fetchTasks}>Fetch</Button>
    {tasksList()}
  </div>
}

export default Tasks
