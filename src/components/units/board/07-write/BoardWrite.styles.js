import styled from '@emotion/styled'

export const RedInput = styled.input`
  border-color: red;
`

export const BlueButton = styled.button`
  font-size : ${props => props.fz};
  background-color: ${props => props.bgcolor};
  color: ${props => props.isTrue ? 'black':'red'}
`