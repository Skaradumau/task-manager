import React from 'react'
import { useParams } from 'react-router-dom'
import { DefaultTemplate } from 'components/templates'
import { SubTasks } from 'modules'

const SubtasksList = () => {
  const { id } = useParams()

  return (
    <DefaultTemplate>
      <SubTasks taskId={id} />
    </DefaultTemplate>
  )
}

export default SubtasksList
