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

## Setup `styles` folder

This will the folder where all global style references and declarations live. Eg: global variables, mixins, framework styles, etc.

- Start be removing `app.css` and `index.css` imports from `app.js` and `index.js`, and then delete both CSS files from the root directory.
- Create a `styles` folder inside the `src` directory.

## Implement a global styles structure

#### Settings
- Create the `settings` folder inside of our `src/styles` directory. The `settings` folder contains fonts, themes, functions, mixins, etc.
- Create a `theme.jsx` file that lives inside the `styles/settings` folder.
- Create a `utils.jsx` partial that lives inside the `styles/settings` folder. ITCSS puts this in it's own `tools` folder, however we're going to combine that with settings so we can import just 1 file when we're working at the component level.

  - Note: if you want to bring in your own font declarations, we recommend creating a `fonts.jsx` file in this folder, and declaring your font-family there. We also suggest creating a ['font-face'](https://transfonter.org/) and serving it from the project rather than Google fonts when possible.

#### Elements

- Create the `elements` folder inside of our `src/styles` directory. The `elements` folder contains our global base elements styles.
- Create a `base.jsx` file that lives inside the `styles/elements` foler.
- To use `base.jsx` we need to first import React and [css](https://emotion.sh/docs/css-prop) from Emotion.
  ```
  import React from 'react'
  import { css } from '@emotion/core'
  ```
- Now you can add a `GlobalStyles` constant that will contain string styles for the apps base styles.
  ```
  export const GlobalStyles = css`
    html,
    body {
      height: auto;
    }
  `

## Setup theme file
Colors, fonts, breakpoints

## normalize and reset
Through inject global

## Bring in Rebass

## Atomic
Think about adding / using polished in this section
