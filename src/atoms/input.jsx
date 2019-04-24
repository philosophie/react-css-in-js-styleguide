import React from 'react'
import styled from '@emotion/styled'

const BaseInput = styled.input`
  height: calc(1.5em + 1rem + 2px);
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  width: 100%;

  &.input--email {
    height: calc(1.8em + 1rem + 2px);
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`

export function Input(props) {
  return (
    <BaseInput
      type="text"
      placeholder={props.placeholder}
      className={props.email ? 'input--email' : ''}
    />
  )
}
