import { css } from '@emotion/core'

import { Theme } from '../settings'

export const Base = css`
  body {
    font-family: 'PT Sans';
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${Theme.colors.black};
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
    margin-top: 0;
  }

  a {
    color: ${Theme.colors.brandPrimary};
    text-decoration: none;

    &:hover,
    &:active,
    &:focus {
      text-decoration: underline;
    }
  }
`
