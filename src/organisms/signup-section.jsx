import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'

import { Container } from '../atoms/container'
import { EmailSignup } from '../molecules/email-signup'

const SignUpContainer = styled.div`
  background: ${props => props.theme.colors.darkGray};
  color: ${props => props.theme.colors.white};
  padding: 7% 0;
`

export function SignupSection(props) {
  return (
    <SignUpContainer>
      <Container>
        <Flex flexWrap="wrap">
          <Box width={[1, 1 / 2, 2 / 3, 2 / 3]} p={3}>
            <h2>{props.headline}</h2>
            <p>{props.cta_copy}</p>
          </Box>

          <Box width={[1, 1 / 2, 1 / 3, 1 / 3]}>
            <EmailSignup placeholder={props.placeholder} title={props.title} />
          </Box>
        </Flex>
      </Container>
    </SignUpContainer>
  )
}
