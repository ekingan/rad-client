# Getting Started with Rad Client

Pull down this branch and run `npm install` or `yarn`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test a`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

I focused exclusively on testing business logic.

### Known Issues

When navigating between routes, the decooded serial number data does not persist.

I spent very little time working on styling and instead tried to focus on functionality.

The JWT token is stored in localStorage - this is not ideal and this strategy should not be used on production code.

I added basic component tests, in production these should be more robust
