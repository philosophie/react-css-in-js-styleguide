import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'

import { Container } from '../atoms/container'
import { Paragraph, H2 } from '../atoms/text'
import { EmailSignup } from '../molecules/email-signup'

const SignUpContainer = styled.div`
  background: ${props => props.theme.colors.darkGray};
  padding: 7% 0;
`

export function SignupSection(props) {
  return (
    <SignUpContainer>
      <Container>
        <Flex flexWrap="wrap">
          <Box width={[1, 1, 1/2, 3 / 5]} p={3}>
            <H2 whiteText>{props.headline}</H2>
            <Paragraph whiteText>{props.cta_copy}</Paragraph>
          </Box>

          <Box width={[1, 1, 1/2, 2 / 5]} p={3}>
            <EmailSignup placeholder={props.placeholder} title={props.title} />
          </Box>
        </Flex>
      </Container>
    </SignUpContainer>
  )
}
