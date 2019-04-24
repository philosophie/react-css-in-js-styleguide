import React from 'react'
import styled from '@emotion/styled'

import { Input } from '../atoms/input'
import { Button } from '../atoms/button'

const FormContainer = styled.div`
  display: flex;
  max-width: 500px;
`

const EmailInput = styled(Input)`
  height: calc(1.8em + 1rem + 2px);
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`

const SubmitButton = styled(Button)`
  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`

export function EmailSignup(props) {
  return (
    <FormContainer>
      <EmailInput placeholder={props.placeholder} email={true} />
      <SubmitButton title={props.title} />
    </FormContainer>
  )
}
