# Description

This application allows you to create shortened URLs and copy them to your clipboard.

## Setup

Before you can run the application, be sure to create a Postgres database called `short-link-generator`.
Then, you can either create a `secrets.js` from which you export your database username and password, or you can comment out line 2 in `backend/db.js` and replace the login credentials with your own on line 4.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the React SPA in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run backend`

Runs the backend server.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the React App for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run backend`

Runs the ShortLinks backend server.<br/>
Open [http://localhost:8181](http://localhost:3000) to view it in the browser.
