import { css } from '@emotion/core'

import { Theme } from '../settings'

export const Elements = css`
  body {
    font-family: PT Sans;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-style: italic;
    margin-bottom: 0.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-top: 0;
  }

  h2 {
    font-size: 2rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  a {
    color: ${Theme.colors.brandSecondary};
    text-decoration: none;
    background-color: initial;

    &:hover,
    &:active,
    &:focus {
      text-decoration: underline;
    }
  }
`
