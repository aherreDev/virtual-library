# Virtual Library (Code challenge)

[![Netlify Status](https://api.netlify.com/api/v1/badges/6948c0bf-5420-44d6-9c30-364d1f94e6d4/deploy-status)](https://app.netlify.com/sites/aherredev-virtual-library/deploys)

Live demo: [https://aherredev-virtual-library.netlify.app/](https://aherredev-virtual-library.netlify.app/)

## Context

A company wants to offer our audience a way to view our catalog and save the books they are interested in to a reading list.
To do this, we want to develop a web application that allows users to view the available books and create a reading list.

## Technologies used

- Node.js v20.16.0
- React v18.3.1
- Zustand (For state management)
- Css Modules (For styling)
- Vitest - Jest DOM - React Testing Library (For testing)
- MSW (For mocking API requests)
- Eslint - Prettier (For code formatting)
- NVM (For managing Node versions)
- Vite (For building the project)
- Typescript (For static typing)
- Yarn (For package management)
- Netlify (For deployment)
- Github Actions (For CI/CD)
- Bulma (For some styling)

## Framework agnostic support

Since part of the main requirements was to try to make a framework agnostic solution,
I decided to use Zustand for state management, which is a simple and fast library that can be used with any
framework or library, then I used Vite as a build tool, which is a modern build tool that can be used with any
framework or library, and finally, I used Bulma as a CSS framework,
which is a lightweight and easy-to-use CSS framework that can be used with any framework or library.

Also, I used Typescript for static typing, which is a superset of Javascript that can be used
with any framework or library and I tried to modularize the code as much as possible
to make it easier to maintain and migrate it to another framework.

## How to run the project

1. Clone the repository
2. Run `nvm use` to use the correct Node version
3. Run `yarn` to install the dependencies
4. Run `yarn dev` to start the development server

## How to run the tests

1. Run `yarn test` to run the tests

## How to build the project

1. Run `yarn build` to build the project
2. Run `yarn serve` to serve the build

## How to deploy the project

1. Push the changes to your development branch
2. Create a pull request to the `master` branch
3. Once the PR is approved, merge it to the `master` branch
4. The project will be automatically deployed to Netlify

## Additional notes

- The project is responsive and works on mobile devices
- Some of the project components were inspired by the [Aceternity UI](https://ui.aceternity.com/) library
