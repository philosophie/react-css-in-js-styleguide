# Style Guidelines for CSS-in-JS

## What is this?

This is an example project for you to reference when setting up a new web app using React and/or CSS-in-JS. Alternatively, you can follow the [installation](#installation) steps below on your own project.

## Why do I need this?

This is to help engineers and designers setup style related tools, and follow a frontend convention for the project. This makes the project more maintainable in the future.

## Tech & Ideologies Used

1. [React](https://github.com/facebook/create-react-app)
2. [Emotion](https://github.com/emotion-js/emotion)
3. [Rebass Emotion](https://github.com/rebassjs/rebass)
4. [Polished](https://polished.js.org/docs/)
5. [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) + [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)
6. [Minireset](https://github.com/jgthms/minireset.css/)
7. [Modern Normalize](https://github.com/sindresorhus/modern-normalize)

## Usage

To use this project as a starting point for your React web app, simply clone this repo and run:

- `npm install`

- `npm start`

## <a name="installation"></a>Installation

To setup a new project yourself, follow these instructions:

## Install Emotion

Emotion is a library designed for writing css styles with JavaScript. Explore the [Emotion Docs](https://emotion.sh/docs/introduction) to learn more.
`npm install -S @emotion/core @emotion/styled emotion-theming`

## Adopt or define a folder convention

Whether it's via [SMACCS](https://smacss.com/book/categorizing), [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/), [RSCSS](https://rscss.io/), [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) or something else, every new project should follow a consistent folder structure.

For this example, we've picked a mix of [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) and [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/). Atomic for our component/page scoped styles, and ITCSS for our global styles.

ITCSS suggests a sane way to separate global styles based on specificity, reach, and explicitness. **[For more info on ITCSS, please read this](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)**. We're only going to be using 2 principles of ITCSS, `settings`, and `elements` since Atomic deals with the rest.

## Setup `styles` file structure

This will the folder where all global style references and declarations live. Eg: global variables, functions, framework styles, etc.

- Start be removing `app.css` and `index.css` imports from `app.js` and `index.js`, and then delete both CSS files from the root directory.
- Create a `styles` folder inside the `src` directory.

### Settings Folder

- Create the `settings` folder inside of our `src/styles` directory. The `settings` folder contains fonts, themes, functions related to styles, etc.
- Create a `theme.js` file that lives inside the `styles/settings` folder.
- Create a `utils.js` partial that lives inside the `styles/settings` folder. ITCSS puts this in it's own `tools` folder, however we're going to combine that with settings so we can import just 1 file (via an `index.js` file) when we're working at the component level.

  - Note: if you want to bring in your own font declarations, we recommend creating a `fonts.js` file in this folder, and declaring your font-family there. We also suggest creating a ['font-face'](https://transfonter.org/) and serving it from the project rather than Google fonts when possible.

- Create an `index.js` file that has the following:

```js
export * from './fonts'
export * from './theme'
export * from './utils'
```

This lets us easily import anything that lives inside the `styles/settings` folder like: `import {Theme} from './styles/settings'`

### Elements Folder

- Create the `elements` folder inside of our `src/styles` directory. The `elements` folder contains our base elements styles.
- Create a `base.js` file that lives inside the `styles/elements` folder.
- We need to import [css](https://emotion.sh/docs/css-prop) from Emotion:

  ```js
  import { css } from '@emotion/core'

  export const Base = css`
    body {
      font-family: PT Sans;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      text-align: left;
    }
  `
  ```

  - Note: Remember that here we only want to add styles on bare HTML elements like `body, h1, p`, etc.

### Global Styles

- Create a `global.js` file inside the `src/styles` folder. This will be imported into `App.jsx` and will contain all our global styles.

  ```js
  import { css } from '@emotion/core'

  import { Base } from './elements/base'

  // You can also import your fonts and add it above ${Base}
  export const GlobalStyles = css`
    ${Base}
  `
  ```

## Add Normalize and Reset

[Reset](https://github.com/jgthms/minireset.css) does exactly what it's name implies. It resets various browser css styles and sets a few styles in order to get your environment to a good starting point.

- Run `npm install minireset.css` to add Minireset.

- Import Minireset into the previously created `global.js` file.

  ```js
  import { css } from '@emotion/core'
  import 'minireset.css'

  ...
  ```

[Normalize](https://github.com/sindresorhus/modern-normalize) makes browsers render all elements more consistently and in line with modern standards.

- Run `npm install modern-normalize` to add Modern Normalize.

- Import Modern Normalize into the previously created `global.js` file.

  ```js
  import { css } from '@emotion/core'
  import 'minireset.css/minireset.css'
  import 'modern-normalize/modern-normalize.css'

  ...
  ```

## Setup theme file

The `theme.jsx` file is where you will specify all of your colors, fonts, breakpoints, etc.

- Start by creating a `Theme` constant.

  ```js
  const Theme = {}
  ```

- Add variables as needed to `Theme`.

  ```js
  const Theme = {
    colors: {
      primary: '#e22d60',
      secondary: #000000,
    },
    fonts: {
      primary: 'sans-serif',
      secondary: 'serif',
    },
  }
  ```

- Next define our breakpoints. We've created a handy function for you to use in other components:

  ```js
  const Xs = '500px'
  const Sm = '740px'
  const Md = '900px'
  const Lg = '1080px'
  const Xl = '1200px'
  const Xxl = '1540px'

  const Theme = {
    ...
    breakpoints: [Sm, Md, Lg, Xl, Xxl],
    ...
  }

  const breakpoints = [
    { xs: Xs },
    { sm: Sm },
    { md: Md },
    { lg: Lg },
    { xl: Xl },
    { xxl: Xxl },
  ]

  export const Mq = breakpoints.reduce((acc, breakpoint) => {
    const entry = Object.entries(breakpoint)[0]
    acc = { ...acc, [entry[0]]: `@media (min-width: ${entry[1]})` }
    return acc
  }, {})
  ```

  We have to add the breakpoints array to the Theme object in order for Rebass to work.

## Importing the `Theme`

In order to make the `Theme` and `GlobalStyles` apply to the entire app you need to import them into our `App`.

- In `App.jsx` import Global from `@emotion/core` and import `GlobalStyles` from `./styles/global`.

  ```jsx
  import React, { Component } from 'react'
  import { Global } from '@emotion/core'

  import { GlobalStyles } from './styles/global'

  class App extends Component {
    render() {
      return (
        <>
          <Global styles={GlobalStyles} />
        </>
      )
    }
  }

  export default App
  ```

- Now import `ThemeProvider` from `emotion-theming`, and `Theme` from `./styles/settings`. This will allow us to use our theme variables in other components without needing to import the `Theme`.

  ```jsx
  import React, { Component } from 'react'
  import { Global } from '@emotion/core'
  import { ThemeProvider } from 'emotion-theming'

  import { Theme } from './styles/settings'
  import { GlobalStyles } from './styles/global'

  class App extends Component {
    render() {
      return (
        <ThemeProvider theme={Theme}>
          <Global styles={GlobalStyles} />
        </ThemeProvider>
      )
    }
  }

  export default App
  ```

## Bring in Rebass

[Rebass](https://github.com/rebassjs/rebass) is a component system that provides some basic UI elements and powerful flexbox based positioning.

- Run `npm i @rebass/emotion @emotion/core @emotion/styled` to install Rebass.

  Note: Check out the section below to see some of the ways Rebass can be used or read through the documentation [here](https://rebassjs.org/getting-started).

## Install Polished

[Polished](https://polished.js.org/docs/) is a toolset of Sass-like functions (eg: lighten, darken, etc.) that are built for CSS-in-JS usage.

- Run `npm i polished` to install it.

  Note: Please check out the documentation [here](https://polished.js.org/docs/) if you intend to use Polished.

## Using Atomic structure

Follow these instruction to setup and create an atom, molecule, organism, template, or page. You can see a working example of each on `src/pages/atomic-page`.

### 1. Setup the Atomic structure

Atomic Design's ideologies categorize styles via `atoms`, `molecules`, `organisms`, `templates`, and `pages`. **[For detailed info on what these categorizes really mean, please read this](http://bradfrost.com/blog/post/atomic-web-design/)**.

- Create each category folder in the `src` directory (`atoms`, `molecules`, `organisms`, `templates`, and `pages`).

- Note: Depending on your needs 'templates' and 'pages' can be redundant. If this is the case, remove or do not add templates to your project.

### 2. Create your first `atom`

We're going to create a `Button` atom that has custom styles using CSS-in-JS.

- Create a new file called `button.jsx` inside the `src/atoms` directory.

  ```jsx
  import React from 'react'
  import styled from '@emotion/styled'

  const BaseButton = styled.button`
    padding: 0.6rem 2rem;
    font-size: 1.2rem;
    background-color: ${props => props.theme.colors.brandPrimary};
    border-color: ${props => props.theme.colors.brandPrimary};
    border-radius: 0.25rem;
    color: ${props => props.theme.colors.white};
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    cursor: pointer;
  `

  export function Button(props) {
    return <BaseButton>{props.title}</BaseButton>
  }
  ```

- Next replace the contents of `App.jsx` (you can delete the `App.test.js`, `logo.svg`, files too):

  ```jsx
  import React, { Component } from 'react'
  import { Button } from './atoms/button'

  class App extends Component {
    render() {
      return <Button title="Atom Test" />
    }
  }

  export default App
  ```

- Go to `http://localhost:3000/` and you should see your new button rendered on the page!

### 3. Add styles to your `atom`

Now we're going to add component level styles to our new `Button` component.

```jsx
import React from 'react'

export function Button(props) {
  return <button>{props.title}</button>
}
```

- At the top of the `button.jsx` file, import the `styled`:

  ```jsx
    import React from 'react'
    import styled from '@emotion/styled'

    ...
  ```

- Using `styled`, we can create a CSS-in-JS const that declares the styles for the element, as well as what the element actually is.

  ```jsx
  const BaseButton = styled.button`
    padding: 0.6rem 2rem;
    font-size: 1.2rem;
    background-color: ${props => props.theme.colors.brandPrimary};
    border-color: ${props => props.theme.colors.brandPrimary};
    border-radius: 0.25rem;
    color: ${props => props.theme.colors.white};
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    cursor: pointer;
  `
  ```

  - Note: By using `props` we're able to access our Theme properties.

- We then update our `Button` component to use `BaseButton`'s styles:

  ```jsx
  ...
  export function Button(props) {
    return (
      <BaseButton>
        {props.title}
      </BaseButton>
    )
  }
  ```

### 4. Creating your first `molecule`

We're now going to create an `EmailSignup` molecule that is made up of `atoms`.

- Create a new file called `email-signup.jsx` inside the `src/molecules` directory.

  ```jsx
  import React from 'react'

  export function EmailSignup(props) {
    return <div className="email-signup" />
  }
  ```

- Next import the necessary `atoms` and add them to the markup.

  ```jsx
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
        <EmailInput placeholder={props.placeholder} />
        <SubmitButton title={props.title} />
      </FormContainer>
    )
  }
  ```

### 5. Creating an `organism`

You can now use `Button` and `EmailSignup` directly on any new `page` you create, but we are going go one step further and create a `SignupSection`.

- Create a new file called `signup-section.jsx` inside the `src/organism` directory.

  ```jsx
  import React from 'react'

  export function SignupSection(props) {
    return <div className="signup-section" />
  }
  ```

- Similar to creating a `molecule` you will now import the necessary `molecules` or `atoms`.

  ```jsx
  import React from 'react'
  import { EmailSignup } from '../molecules/email-signup'

  export function SignupSection(props) {
    return (
      <div className="signup-section">
        <h2>{props.headline}</h2>
        <p>{props.cta_copy}</p>

        <EmailSignup placeholder={props.placeholder} title={props.title} />
      </div>
    )
  }
  ```

- Next we will add structure to our `molecule` by importing `Flex` and `Box` from `@rebass/emotion`.

  ```jsx
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
              <EmailSignup
                placeholder={props.placeholder}
                title={props.title}
              />
            </Box>
          </Flex>
        </Container>
      </SignUpContainer>
    )
  }
  ```
