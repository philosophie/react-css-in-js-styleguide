import styled from '@emotion/styled'
import { Box } from '@rebass/emotion'

import { Mq } from '../styles/settings'

export const Container = styled(Box)`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  ${Mq.sm} {
    max-width: 540px;
  }

  ${Mq.md} {
    max-width: 720px;
  }

  ${Mq.lg} {
    max-width: 960px;
  }

  ${Mq.xl} {
    max-width: 1140px;
  }
`
