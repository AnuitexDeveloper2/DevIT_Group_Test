- [Getting Started](#getting-started)
- [Dev tools](#dev-tools)
- [References](#references)
- [Project Structure](#project-structure)
- [Tests](#tests)

1. Create a `.env` file in the root of your project.
2. Add the following lines to the `.env` file and replace `<REACT_APP_URL>` with localhost or the development environment:

```
REACT_APP_URL=******

```

3. Run `npm install`
4. Run `npm start`

## Dev tools
1. Run `npm run lint:fix` to reformat code inside __src__ directory (better to do it before every commit)
2. Run `npm run lint` to analyze code inside __src__ directory. It executes before each commit
3. Run `npm run test` to execute unit tests

## References

Ant Design is a React UI library for building user interfaces.
[https://ant.design/components/overview/](https://ant.design/components/overview/)

Styled-components is excellent library for working with css in react application
[https://styled-components.com/docs](https://styled-components.com/docs)

Enzyme is a JavaScript Testing utility for React 
[https://enzymejs.github.io/enzyme/](https://enzymejs.github.io/enzyme/)

## Project Structure

* `src/assets` & `src/public` - contains all static assets
* `src/pages` - application Pages
* `src/redux` - Redux Toolkit
* `src/hooks` - contains all custom hooks
* `src/styles` - contsins reusable style components and color variables
* `src/components` - custom reusable components

## Tests
- Run `npm run tests` for execute unit testing
- Test files ыhould be kept near the components they are testing