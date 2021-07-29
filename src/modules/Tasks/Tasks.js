import React, { useEffect } from 'react'
import { Button } from 'components/atoms'
import { Task } from 'components/molecules'
import { useDispatch, useSelector } from 'react-redux'

const Tasks = () => {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks.value)

  useEffect(() => {
    dispatch({ type: 'TASKS_REQUESTED' })
  }, [dispatch])

  const onCreate = () => {
    dispatch({type: 'CREATE_TASK'})
  }

  const onFetch = () => {
    dispatch({type: 'TASKS_REQUESTED'})
  }

  const tasksList = () => {
    return tasks.map(task => {
      return <Task task={task} key={task.id}>
        {task.title}
      </Task>
    })
  }

  return <div>
    <h1>Processes</h1>
    <Button onClick={onCreate}>Create</Button>
    <Button onClick={onFetch}>Fetch</Button>
    {tasksList()}
  </div>
}

export default Tasks
