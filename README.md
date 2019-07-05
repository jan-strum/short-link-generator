# Shortlink Generator

The following project provides a base for building a shortlink generating
application like https://bit.ly.

We'll call it https://z4th.com/

In this repository you will find:

- A backend server running [Express](https://expressjs.com/)
- A frontend React application bootstrapped with [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)

You will be responsible for building the backend API and frontend UI for creating,
and viewing shortlinks. The design of this system should be based on the
requirements you gathered in the previous interview.

Some things to keep in mind to keep things simple:

- Do not worry about users or authentication
- Do not worry about click and view analytics
- Do not worry about expiring links or providing delete functionality

## Project Requirements

- Your database of shortlinks should persist between server restarts.
- There should be an endpoint that resolves `http://localhost:3000/[SHORTLINK]` to whatever was
  created for that shortlink.
- The backened should have a RESTful API to create shortlinks, list all
  shortlinks, and view a single shortlink.
- The frontend should have a view to create shortlinks and a view to display all
  shortlinks.
- There should be minimal styles applied (you don't need a pixel perfect UI,
  just enough to see design considerations).

## Time Considerations

Please do not spend a whole weekend or a full work day on this project. You
should be able to have something worthy of MVP status in about two hours or so.

## Working on and submitting your finished project

In order to work on your project and submit it you should:

- Fork this project to your personal Github profile
- Develop the application locally
- Create a pull request on this repository when you are done
- Our team will review the application and in the following interview we will
  discuss the application with you.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the React SPA in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

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

Runs the shortlinks backend server.<br/>
Open [http://localhost:8181](http://localhost:3000) to view it in the browser.
