import React from 'react'
import styled from '@emotion/styled'
import { Box, Flex } from '@rebass/emotion'

import { Paragraph, H1, H2 } from '../atoms/text'

const HeroSection = styled.section`
  height: 10rem;
  background: grey;
  margin-bottom: 5%;
`

const HeroContainer = styled(Flex)`
  margin: 0 auto;
  max-width: 1200px;
  height: 100%;
`

const PageSection = styled.section`
  margin: 0 auto 5%;
  max-width: 1200px;
  padding-left: 1rem;
  padding-right: 1rem;
`

const BoxContainer = styled.div`
  background: grey;
  height: 5rem;

  &.box-container__full-width {
    height: 10rem;
  }
`

export function RebassLayout(props) {
  return (
    <main>
      <HeroSection>
        <HeroContainer p={3} alignItems="center">
          <H1>Hero Container</H1>
        </HeroContainer>
      </HeroSection>

      <PageSection>
        <Flex>
          <Box width={1}>
            <BoxContainer className="box-container__full-width"></BoxContainer>
          </Box>
        </Flex>
      </PageSection>

      <PageSection>
        <Flex flexWrap="wrap" mx={[0, -2]}>
          <Box px={[0, 2]} my={[2, 2, 0]} width={[1, 1 / 2, 1 / 4]}>
            <BoxContainer>Test</BoxContainer>
          </Box>
          <Box px={[0, 2]} my={[2, 2, 0]} width={[1, 1 / 2, 1 / 4]}>
            <BoxContainer>Test</BoxContainer>
          </Box>
          <Box px={[0, 2]} my={[2, 2, 0]} width={[1, 1 / 2, 1 / 4]}>
            <BoxContainer>Test</BoxContainer>
          </Box>
          <Box px={[0, 2]} my={[2, 2, 0]} width={[1, 1 / 2, 1 / 4]}>
            <BoxContainer>Test</BoxContainer>
          </Box>
        </Flex>
      </PageSection>

      <PageSection>
        <Flex>
          <Box width={[1, 1, 1 / 2]}>
            <H2>Text with no background</H2>
            <Paragraph>
              Michael Bloomberg is expected to pull out of the Democratic
              presidential race after failing to win in any states on Super
              Tuesday despite spending more than half a billion dollars of his
              own money on campaign advertising.
            </Paragraph>
          </Box>
        </Flex>
      </PageSection>

      <PageSection>
        <Flex flexWrap="wrap" mx={[0, -2]}>
          <Box px={[0, 2]} my={[2, 2, 0]} width={[1, 1, 1 / 3]}>
            <BoxContainer></BoxContainer>
          </Box>
          <Box px={[0, 2]} my={[2, 2, 0]} width={[1, 1, 1 / 3]}>
            <BoxContainer></BoxContainer>
          </Box>
          <Box px={[0, 2]} my={[2, 2, 0]} width={[1, 1, 1 / 3]}>
            <BoxContainer></BoxContainer>
          </Box>
        </Flex>
      </PageSection>
    </main>
  )
}
