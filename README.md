# Style Guidelines for CSS-in-JSS

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

## Adpot or define a folder convention

Whether it's via [SMACCS](https://smacss.com/book/categorizing), [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/), [RSCSS](https://rscss.io/), [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) or something else, every new project should follow a consistent folder structure.

For this example, we've picked a mix of [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) and [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/). Atomic for our component/page scoped styles, and ITCSS for our global styles.

ITCSS suggests a sane way to separate global styles based on specificity, reach, and explicitness. **[For more info on ITCSS, please read this](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)**. We're only going to be using 2 principles of ITCSS, `settings`, and `elements` since Atomic deals with the rest.

## Setup `styles` file structure

This will the folder where all global style references and declarations live. Eg: global variables, functions, framework styles, etc.

- Start be removing `app.css` and `index.css` imports from `app.js` and `index.js`, and then delete both CSS files from the root directory.
- Create a `styles` folder inside the `src` directory.

### Settings Folder
- Create the `settings` folder inside of our `src/styles` directory. The `settings` folder contains fonts, themes, functions, mixins, etc.
- Create a `theme.jsx` file that lives inside the `styles/settings` folder.
- Create a `utils.jsx` partial that lives inside the `styles/settings` folder. ITCSS puts this in it's own `tools` folder, however we're going to combine that with settings so we can import just 1 file when we're working at the component level.

  - Note: if you want to bring in your own font declarations, we recommend creating a `fonts.jsx` file in this folder, and declaring your font-family there. We also suggest creating a ['font-face'](https://transfonter.org/) and serving it from the project rather than Google fonts when possible.

### Elements Folder

- Create the `elements` folder inside of our `src/styles` directory. The `elements` folder contains our global base elements styles.
- Create a `base.jsx` file that lives inside the `styles/elements` foler.
- To use `base.jsx` we need to first import React and [css](https://emotion.sh/docs/css-prop) from Emotion.
  ```
  import React from 'react'
  import { css } from '@emotion/core'
  ```
- Now you can add a `GlobalStyles` constant  to `base.jsx` that will contain string styles for the apps base elements.
  ```
  import React from 'react'
  import { css } from '@emotion/core'

  export const GlobalStyles = css`
    h1,
    h2,
    h3,
    h4,
    h5 {
      font-weight: bold;
    }
  ```
## Add normalize and reset

[Reset](https://github.com/jgthms/minireset.css) does exactly what it's name implies. It resets various browser css styles and sets a few styles in order to get your environment to a good starting point.

- Run `npm install minireset.css` to add Minireset.

- Import Minireset into the previously created `GlobalStyles` file.
  ```
  import React from 'react'
  import { css } from '@emotion/core'
  import 'minireset.css/minireset.css'

  export const GlobalStyles = css`
    h1,
    h2,
    h3,
    h4,
    h5 {
      font-weight: bold;
    }
  ```

[Normalize](https://github.com/sindresorhus/modern-normalize) makes browsers render all elements more consistently and in line with modern standards.

- Run `npm install modern-normalize` to add Modern Normalize.

- Import Modern Normalize into the previously created `GlobalStyles` file.
  ```
  import React from 'react'
  import { css } from '@emotion/core'
  import 'minireset.css/minireset.css'
  import 'modern-normalize/modern-normalize.css'

  export const GlobalStyles = css`
    h1,
    h2,
    h3,
    h4,
    h5 {
      font-weight: bold;
    }
  ```

## Setup theme file

The `theme.jsx` file is where you will specify all of your colors, fonts, breakpoints, etc.

- Start by creating a `Theme` constant.
  ```
  const Theme = {
  }
  ```
- Add variables as needed to `Theme`.
  ```
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

ADD BREAKPOINT STUFF HERE

## Importing the `Theme`

In order to make the `Theme` and `GlobalStyles` apply to the entire app you need to import them into our `App`.

- In `App.jsx` import Global from `@emotion/core` and import `GlobalStyles` from `./styles/elements/base`.
  ```
  import React, { Component } from 'react'
  import { Global } from '@emotion/core'

  import { GlobalStyles } from './styles/elements/base'

  class App extends Component {
    render() {
      return (
        <>
        </>
      )
    }
  }

  export default App
  ```

- Next add `Global` and `GlobalStyles` to `App`.
  ```
  import React, { Component } from 'react'
  import { Global } from '@emotion/core'

  import { GlobalStyles } from './styles/elements/base'

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

- Now import `ThemeProvider` from `emotion-theming`, and `Theme` from `./styles/settings/theme`. This will allow us to use our theme variables in other components without needing to import the `Theme`.
```
import React, { Component } from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import Theme from './styles/settings/theme'
import { GlobalStyles } from './styles/elements/base'

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

- Add `ThemeProvider` to `App` using the imported `Theme`.
```
import React, { Component } from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import Theme from './styles/settings/theme'
import { GlobalStyles } from './styles/elements/base'

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

- Run `npm i @rebass/emotion @emotion/core @emotion/styled` to import Rebass.

  Note: Check out the section below to see some of the ways Rebass can be used or read through the documentation [here](https://rebassjs.org/getting-started).


NEED TO UPDATE THE ATOMIC SECTION FOR CSS-IN-JS
## Using Atomic structure

Follow these instruction to setup and create an atom, molecule, organism, template, or page. You can see a working example of each on `src/pages/atomic-page`.

### 1. Setup the Atomic structure

Atomic Design's ideologies categorize styles via `atoms`, `molecules`, `organisms`, `templates`, and `pages`. **[For detailed info on what these categorizes really mean, please read this](http://bradfrost.com/blog/post/atomic-web-design/)**.

- Create each category folder in the `src` directory (`atoms`, `molecules`, `organisms`, `templates`, and `pages`).

- Note: Depending on your needs 'templates' and 'pages' can be redundant. If this is the case, remove or do not add templates to your project.

### 2. Create your first `atom`

We're going to create a `Button` atom that uses Bootstrap's button, but has custom styles.

- Create a new file called `button.jsx` inside the `src/atoms` directory.

  ```jsx
  import React from 'react'
  import * as BootstrapButton from 'react-bootstrap/Button'

  export function Button(props) {
    return (
      <BootstrapButton className="brand-button">{props.title}</BootstrapButton>
    )
  }
  ```

- Next replace the contents of `App.jsx` (you can delete the `App.test.js`, `logo.svg`, files too):

  ```jsx
  import React, { Component } from 'react'
  import { Button } from './atoms/button'

  class App extends Component {
    render() {
      return <Button />
    }
  }

  export default App
  ```

- Go to `http://localhost:3000/` and you should see your new button rendered on the page!

### 3. Add styles to your `atom`

Now we're going to add component level styles to our new `Button` component.

- Create a new file inside `atoms` called `button.scss`
- At the top of the `button.jsx` file, import the Sass file:
  ```jsx
    import React, { Component } from 'react'
    import { Button } from './atoms/button'
    import './button.scss'
    ...
  ```
- Open `button.scss` and import the global variables and mixins:
  ```scss
  @import 'settings/settings';
  ```
- Create an accented button inside `button.jsx`:
  ```jsx
  ..
  export function AccentButton(props) {
    return (
      <BootstrapButton className="brand-button brand-button--accent">
        {props.title}
      </BootstrapButton>
    )
  }
  ```
- Render our new `AccentButton` in `App.js`:

  ```jsx
  import React, { Component } from 'react'
  import { Button, AccentButton } from './atoms/button'

  class App extends Component {
    render() {
      return (
        <>
          <Button title={'Button'} />
          <AccentButton title={'Accent Button'} />
        </>
      )
    }
  }

  export default App
  ```

- Start writing your styles for the `Button` component. We recommend following [BEM](http://getbem.com/naming/) when naming your classes. **If you don't know what BEM is, please [read this](http://getbem.com/naming/)**.

  ```scss
  .brand-button {
    padding: 1rem;

    &--accent {
      // BEM 'Modifier' class
      background-color: $brand-accent; // Comes from 'styles/settings/settings.scss'
      border-color: $brand-accent;

      @include hover() {
        background-color: black;
        border-color: black;
      }
    }
  }
  ```

  Note: we recommend keeping nesting to a max of 2 levels if possible. We also recommend using BEM classnames for **all** selectors where possible. Eg: prefer `.title--2 {}` instead of `h2 {}`. This keeps styles more maintainable and less specific.

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
  import { EmailInput } from '../atoms/email-input'
  import { Button } from '../atoms/button'
  import './email-signup.scss'

  export function EmailSignup(props) {
    return (
      <div className="email-signup">
        <EmailInput
          placeholder={props.placeholder}
          className="email-signup__input"
        />
        <Button title={props.title} className="email-signup__button" />
      </div>
    )
  }
  ```

  Note: If the `molecule` needs component specific styling create `email-signup.scss` in `src/molecules` and import it into `email-signup.jsx`.

### 5. Creating an `organism`

You can now use `Button` and `EmailSignup` directly on any new `page` you create, but we are going go one step further and create a `SignupSection`.

- Create a new file called `email-section.jsx` inside the `src/organism` directory.

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

- Next we will add structure to our `molecule` by importing `Container`, `Row`, and `Col` from `bootstrap`.

  ```jsx
  import React from 'react'
  import { EmailSignup } from '../molecules/email-signup'
  import * as Container from 'react-bootstrap/Container'
  import * as Row from 'react-bootstrap/Row'
  import * as Col from 'react-bootstrap/Col'
  import './signup-section.scss'

  export function SignupSection(props) {
    return (
      <div className="signup-section">
        <Container>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <h2>{props.headline}</h2>
              <p>{props.cta_copy}</p>
            </Col>

            <Col xs={12} md={6} lg={{ span: 5, offset: 1 }}>
              <EmailSignup
                placeholder={props.placeholder}
                title={props.title}
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
  ```

- Now create and import `signup-section.scss` just like we did with the above `molecule`.

  ```scss
  @import 'settings/settings';

  .signup-section {
    background: $dark-gray;
    color: #fff;
    padding: 7% 0;
  }
  ```
