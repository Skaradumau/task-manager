import styled from 'styled-components'

export const SubTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-bottom: 1px solid #ccc;
  margin: 8px;

  button {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    color: #f00;
    font-weight: 700;
    font-size: 15px;
    position: absolute;
    right: 0;
  }
`

export const SubTaskLabels = styled.div`
  margin: 8px 0 4px 0;
  color: #999;
  font-size: 12px;
`
