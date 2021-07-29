import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { number, objectOf, string } from 'prop-types'
import { Button } from 'components/atoms'
import { TaskTileWrapper } from './TaskTile.styles'

const TaskTile = ({ task = {} }) => {
  const dispatch = useDispatch()

  const onDelete = useEffect(() => dispatch({ type: 'DELETE_TASK', payload: task }), [dispatch, task])
  // const onCreate = useEffect(() => dispatch(), [dispatch])
  const onCreate = () => {}
  
  return <TaskTileWrapper to={`/tasks/${task.id}`}>
    {task.title}
    <Button onClick={onDelete}>Delete</Button>
    <Button onClick={onCreate}>Add subtask</Button>
  </TaskTileWrapper>
}

export default TaskTile

TaskTile.propTypes = {
  task: objectOf({
    id: string,
    title: string,
    createTime: number
  }).isRequired,
}
