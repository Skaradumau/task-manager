import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'components/atoms';
import { TaskWrapper } from './Task.styles'

const Task = ({ task = {}, onClick }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch({ type: 'DELETE_TASK', payload: task })

  return <TaskWrapper
    onClick={onClick}
  >
    {task.title}
    <Button onClick={onDelete}>Delete</Button>
    <Button>Add subtask</Button>
  </TaskWrapper>
}

export default Task
