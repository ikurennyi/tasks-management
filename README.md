# Tasks Management Application

Created as a test task by Ievgenii Kurennyi

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Headed Component Tests with [Cypress Component Testing](https://on.cypress.io/component)

```sh
npm run test:unit:dev # or `npm run test:unit` for headless testing
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Notes and future TODOS

1. According to the requirement `you can use Jest or Vue Test Utils` here for tests will be used a combination of Vitest (that is much easier to setup as we're using Vite here) and Vue Test Utils.

2. All routes related to forms are kinda duplicated and can be replaced with redirects on improvements stage. However, for the simplicity and current consistency with types they was left the same for the moment.

3. The `userId` field for project was left for potential future updates with the router guards.

_As this is not a final version of the application some "tasks" will be postponed._

### TODO:

_All todos have to be cleaned up before v.1.0.0_

1. [ ] Check if the root `cypress` folder is needed.
2. [ ] Cleanup the `scripts` section in `package.json` (Note: Cypress will not be used as a component testing framework).
3. [ ] Projects CRUD done. No alerts (feedbacks) at the moment.

### Future improvements list

1. [ ] Restrict routes with the list specified in `types/routes.ts`
2. [ ] Some forms-related routes can be replaced with `redirect` (or `alias`).
