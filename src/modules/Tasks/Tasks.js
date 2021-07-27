import React from 'react'
import { Button } from 'components/atoms'
import { useDispatch } from 'react-redux'

const Tasks = () => {
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch({type: 'TASKS_REQUESTED'})
  }

  return <div>
    <h1>Processes</h1>
    <Button onClick={onClick}>Create</Button>
  </div>
}

export default Tasks
