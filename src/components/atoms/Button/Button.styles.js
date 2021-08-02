import styled from 'styled-components'

export const Wrapper = styled.button`
  background: ${({ primary }) => (primary ? '#2b9c28' : '#fff')};
  color: ${({ primary }) => (primary ? '#fff' : '#000')};
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;

  &:hover {
    background: ${({ primary }) => (primary ? '#026C21' : '#F00')};
    color: #fff;
  }
`
