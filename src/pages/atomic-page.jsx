import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'

import { Button, AccentButton } from '../atoms/button'
import { Input } from '../atoms/input'
import { Paragraph, H2, H4 } from '../atoms/text'
import { Container } from '../atoms/container'
import { EmailSignup } from '../molecules/email-signup'
import { SignupSection } from '../organisms/signup-section'

const AtomicPageSection = styled.main`
  margin-top: 5%;
  margin-bottom: 5%;

  .button {
    margin-right: 1rem;
  }
`

const AtomicPageParagraph = styled(Paragraph)`
  max-width: 690px;
`

export function AtomicPage(props) {
  return (
    <main className="atomic-page">
      <AtomicPageSection>
        <Container>
          <H2>Page</H2>
          <AtomicPageParagraph largeText>
            This "Page" illustrates how elements breakdown in the Atomic system.
            Atoms make up molecules, molecules make up organisms, and organisms
            are used on pages and templates.{' '}
            <a href="http://bradfrost.com/blog/post/atomic-web-design/">
              Click here
            </a>{' '}
            to learn more about Atomic design.
          </AtomicPageParagraph>
        </Container>
      </AtomicPageSection>

      {/* Using atoms */}
      <AtomicPageSection className="atomic-page__section--atoms">
        <Container>
          <H2>Atoms</H2>

          <Flex flexWrap="wrap">
            <Box width={[1, 1, 1 / 2, 1 / 2]} pr={5}>
              <H4>Input Field</H4>
              <Input placeholder={'atom@gmail.com'} />
            </Box>

            <Box width={[1, 1, 1 / 2, 1 / 2]}>
              <H4>Button</H4>
              <Button title={'Atom'} className="button" />
              <AccentButton title={'Atom Accent'} />
            </Box>
          </Flex>
        </Container>
      </AtomicPageSection>

      {/* Using a molecule */}
      <AtomicPageSection>
        <Container>
          <H2>Molecules</H2>

          <Flex>
            <Box>
              <H4>Email signup</H4>
              <EmailSignup
                placeholder={'molecule@gmail.com'}
                title={'Molecule'}
              />
            </Box>
          </Flex>
        </Container>
      </AtomicPageSection>

      {/* Using an organism */}
      <AtomicPageSection>
        <Container>
          <Box>
            <H2>Organisms</H2>
            <H4>Signup Section</H4>
          </Box>

          <SignupSection
            placeholder="organism@gmail.com"
            title="Organism"
            headline="Don't miss out on this Product!"
            cta_copy="This thing is so great and you really need it. Provide your email and we will let you know as soon at it's available."
          />
        </Container>
      </AtomicPageSection>
    </main>
  )
}
