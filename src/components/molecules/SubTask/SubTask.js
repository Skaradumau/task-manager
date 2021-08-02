import { func, shape, string } from 'prop-types'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'components/atoms'
import { SubTaskContainer, SubTaskLabels } from './SubTask.styles'

const SubTask = ({ subTask, onDelete }) => {
  const dispatch = useDispatch()

  const deleteSubTask = useCallback(() => {
    dispatch({ type: 'DELETE_SUBTASK', payload: subTask.id })
    onDelete()
  }, [dispatch, subTask, onDelete])

  const showLabels = () => {
    if (!subTask.labels || !subTask.labels.length) return null

    return <SubTaskLabels>{subTask.labels.join(', ')}</SubTaskLabels>
  }

  return (
    <SubTaskContainer>
      {subTask.id}
      {showLabels()}
      <Button onClick={deleteSubTask}>✖</Button>
    </SubTaskContainer>
  )
}

export default SubTask

SubTask.propTypes = {
  subTask: shape({
    id: string,
    taskId: string,
  }),
  onDelete: func,
}

SubTask.defaultProps = {
  subTask: {
    id: '',
    taskId: '',
  },
  onDelete: () => {},
}
