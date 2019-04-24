import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'

import { Button, AccentButton } from '../atoms/button'
import { Input } from '../atoms/input'
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

const AtomicPageParagraph = styled.p`
  max-width: 690px;
`

export function AtomicPage(props) {
  return (
    <main className="atomic-page">
      <AtomicPageSection>
        <Container>
          <h2>Page</h2>
          <AtomicPageParagraph>
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
          <h2>Atoms</h2>

          <Flex flexWrap="wrap">
            <Box width={[1, 1, 1 / 2, 1 / 2]} pr={5}>
              <h5>Input Field</h5>
              <Input placeholder={'atom@gmail.com'} />
            </Box>

            <Box width={[1, 1, 1 / 2, 1 / 2]}>
              <h5>Button</h5>
              <Button title={'Atom'} className="button" />
              <AccentButton title={'Atom Accent'} />
            </Box>
          </Flex>
        </Container>
      </AtomicPageSection>

      {/* Using a molecule */}
      <AtomicPageSection>
        <Container>
          <h2>Molecules</h2>

          <Flex>
            <Box>
              <h5>Email signup</h5>
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
            <h2>Organisms</h2>
            <h5>Signup Section</h5>
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
