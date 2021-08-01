import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const TaskTileWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  min-height: 130px;
  border-radius: 5px;
  background: #fff;
  padding: 8px 10px 4px;
  margin: 8px 0;
  box-shadow: 0 1px 0 rgb(9 30 66 / 25%);

  button {
    margin: 0 2px;
  }
`

export const TaskTileContent = styled.div`
  padding: 10px 0;
  flex-grow: 1;
`

export const TaskTileFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 10px;
  font-size: 12px;
  color: #999;
`
