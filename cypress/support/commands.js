/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }

Cypress.Commands.add('createProject', () => {
  const projectTitle = 'First Project'
  cy.visit('/projects/new')
  cy.get('[data-test="project-form-title"]').type(projectTitle)
  cy.get('[data-test=project-form]').find('button', 'Create').click()
})

Cypress.Commands.add('visitFirstProject', () => {
  cy.get('[data-test="projects-list"]').find('.v-card').first().click()
})

Cypress.Commands.add('createTask', (task) => {
  cy.get('[data-test="create-task"]').click()
  cy.get('[data-test=task-form-title]').type(task.title)
  cy.get('[data-test=task-form-status]').find('button').eq(task.status).click()
  cy.get('[data-test=task-form-priority]').find('button').eq(task.priority).click()
  cy.get('[data-test=task-form-description]').type(task.description)
  cy.get('[data-test=task-form-submit]').click()
})

Cypress.Commands.add('createThreeTasks', () => {
  const threeTasks = [
    { title: 'First Task', status: 0, priority: 0, description: 'First Task Desc' },
    { title: 'Second Task', status: 1, priority: 1, description: 'Second Task Desc' },
    { title: 'Third Task', status: 2, priority: 2, description: 'Third Task Desc' },
  ]

  cy.createProject()
  cy.visitFirstProject()
  threeTasks.forEach((task) => {
    cy.createTask(task)
  })
})
export {}
