import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { string } from 'prop-types'
import { useHistory } from 'react-router-dom'
import { Button } from 'components/atoms'
import { SubTask } from 'components/molecules'
import { SubtasksWrapper } from './SubTasks.styles'

const SubTasks = ({ taskId }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const task = useSelector(state => state.tasks.value.find(t => t.id === taskId))
  const subTasks = useSelector(state => state.subTasks.value)

  const createSubTask = useCallback(
    () => dispatch({ type: 'CREATE_SUBTASK', payload: taskId }),
    [dispatch, taskId],
  )

  useEffect(() => {
    dispatch({ type: 'SUBTASKS_REQUESTED', payload: taskId })
    dispatch({ type: 'TASKS_REQUESTED' })
  }, [dispatch, taskId])

  const onDelete = () => {
    if (subTasks.length && subTasks.length > 1) return null

    return history.push('/')
  }

  const list = () =>
    subTasks.map(subTask => (
      <SubTask subTask={subTask} key={subTask.id} onDelete={onDelete}>
        {subTask.id}
      </SubTask>
    ))

  const showTaskTitle = () => (task ? task.title : null)

  return (
    <SubtasksWrapper>
      <h2>{showTaskTitle()}</h2>
      <h3>Subtasks:</h3>
      {list()}
      <Button onClick={createSubTask} primary>
        ✚
      </Button>
    </SubtasksWrapper>
  )
}

export default SubTasks

SubTasks.propTypes = {
  taskId: string.isRequired,
}
