import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { number, shape, string } from 'prop-types'
import { Button } from 'components/atoms'
import { TaskTileWrapper, TaskTileFooter, TaskTileContent } from './TaskTile.styles'

const TaskTile = ({ task = {} }) => {
  const dispatch = useDispatch()

  const onDelete = useCallback(
    e => {
      e.preventDefault()
      dispatch({ type: 'DELETE_TASK', payload: task })
    },
    [dispatch, task],
  )
  const onCreate = useCallback(
    e => {
      e.preventDefault()
      dispatch({ type: 'CREATE_SUBTASK', payload: task.id })
    },
    [dispatch, task],
  )

  const showDate = () => {
    if (!task.createTime) return ''

    return `Created at: ${new Date(task.createTime).toLocaleDateString('en-US')}`
  }

  return (
    <TaskTileWrapper to={`/tasks/${task.id}`}>
      <h4>{task.id}</h4>
      <TaskTileContent>{task.title}</TaskTileContent>
      <TaskTileFooter>
        {showDate()}
        <div>
          <Button onClick={onCreate} primary>
            Add subtask
          </Button>
          <Button onClick={onDelete}>Delete</Button>
        </div>
      </TaskTileFooter>
    </TaskTileWrapper>
  )
}

export default TaskTile

TaskTile.propTypes = {
  task: shape({
    id: string,
    title: string,
    createTime: number,
  }).isRequired,
}
