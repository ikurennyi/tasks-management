# Tasks Management Application

> Created as a test task by Ievgenii Kurennyi
>
> This project was created as a test assignment in response to the request “Create a Task Management Application.”

## Table of Contents

1. [Application Notes](#title2)
2. [Where and How to View the Project](#title3)
3. [Project Launch and CLI Commands](#title4)
   1. [Launching the Project](#subtitle41)
   2. [CLI](#subtitle42)
4. [List of Used Technologies](#title5)
5. [Possible Improvements](#title6)

## <a id="title2">Application Notes</a>

1. While writing the code, it was taken into account that the final stage would be presented (i.e., some parts of the work were left in the “future tasks” list).
2. To avoid manually filling in the list of projects and tasks, and to demonstrate interaction with the backend, it was decided to work with JSONPlaceholder.
   The restrictions on entity creation were bypassed. However, this service does not allow data updates in all cases. Error messages for such update failures will be displayed in the interface.
3. The restrictions on entity creation were bypassed. However, this service does not allow data updates in all cases. Error messages for such update failures will be displayed in the interface.
4. Depending on whether the data was retrieved from JSONPlaceholder or created manually, the task list may update automatically.
5. Saving data in the browser was not implemented initially and may be added later (localStorage allows storing up to 5–10MB. For a full-featured application, indexedDB could be considered).
6. Unit tests in the project cover only Vuex functionality. All in-app interactions are covered by e2e tests using [Cypress](https://www.cypress.io/).
7. TypeScript is only partially used in the project.
8. Prettier and ESLint with a pre-commit hook (husky + lint-staged) were used to check for errors and unify code styling.

## <a id="title3">Where and How to View the Project</a>

1. Проект будет доступен:
   1. As code, [on GitHub](https://github.com/ikurennyi/tasks-management).
   2. As a live version of the website on GitHub Pages
   3. As a zip archive attached to the email upon completion of the test task

## <a id="title4">Project Launch and CLI Commands</a>

> The project includes several CLI tasks. See the file `package.json`

### <a id="subtitle41">Launching the Project:</a>

1. To run the built project locally, any server (live-server, nginx) or an application with such functionality is required to bypass the browser’s restrictions on loading local resources (CORS problem).
2. If Node.js is installed:
   1. Clone/download the project from GitHub.
   2. Navigate to the project folder.
   3. Run the command `npm install`
   4. Start the application with the command `npm run dev`
   5. The Vite local server will start. Usually (if the port is available), you can go to `http://localhost:5173/` n your browser (Vite will show the address of the running server in the terminal).
3. The running application can be viewed on the public GitHub page (GitHub Pages is used).

### <a id="subtitle42">CLI:</a>

1. Start the project: `npm rub dev`
2. Build the project: `npm run build`
3. Check for TypeScript errors: `npm run type-check`
4. Check for formatting errors: `npm run lint-staged`

## <a id="title5">List of Used Technologies</a>

- [Vue.js](https://vuejs.org/) v3
- [Vuetify](https://vuetifyjs.com/en/) v3
- [Vuex](https://vuex.vuejs.org/) v4
- [Vue Router](https://router.vuejs.org/) v4
- [TypeScript](https://www.typescriptlang.org/) 5
- [Vite](https://vite.dev/) v6
- [Cypress](https://www.cypress.io/) v14
- [Vitest](https://vitest.dev/) v3

## <a id="title6">Possible Improvements</a>

1. Add client-side data storage (the author has already done something similar [in this example](https://github.com/ikurennyi/up-calendar) )
2. Submit forms on pressing Enter.
3. Implement updates. Use PATCH instead of UPDATE where possible.
4. For error handling, you can create a separate module or use something like [Sentry](https://sentry.io/)
5. For storing text data, it would be better to use i18n.
6. The illustrations used in the project are original.
7. Cover the code with unit tests.
8. Some similar routes can be simplified by using redirect within the routing configuration file.
9. Add TypeScript. Use strict typing in some parts of the application.
10. Add animations. Change the Vuetify theme.
11. Automatically update the page titles on transitions.
12. Update styles for mobile responsiveness.
13. There’s always room for improvement in the codebase: reuse, abstraction, etc.
