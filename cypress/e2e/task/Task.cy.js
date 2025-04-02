describe('Task', () => {
  const task = {
    title: 'Test Task Title',
    status: 1,
    priority: 2,
    description: "Test Task's Description",
  }

  it('can be created with form', () => {
    cy.createProject()
    cy.visitFirstProject()
    cy.createTask(task)

    cy.get('[data-test=tasks-table').as('table').should('be.visible')
    cy.get('@table').find('tbody').find('tr').eq(0).find('td').eq(1).contains(task.title)
    cy.get('@table').find('tbody').find('tr').eq(0).find('td').eq(2).contains('in-progress')
    cy.get('@table').find('tbody').find('tr').eq(0).find('td').eq(3).contains('high')
  })

  it('has guard restrictions', () => {
    cy.visit('/')
    cy.get('main [data-test=populate-projects]').click()
    cy.visit('/projects/1/tasks/aaa')
    cy.get('main').contains('h2', 'Ready to start a new project')
  })

  it('has view page', () => {
    cy.createProject()
    cy.visitFirstProject()
    cy.createTask(task)

    cy.get('[data-test=tasks-table').find('tbody').find('tr').click()

    cy.get('[data-test=task-info]').as('taskInfo')
    cy.get('@taskInfo').find('.v-card-title').as('cardTitle').contains('span', 'Task ID:')
    cy.get('@cardTitle').contains('button', 'Edit')
    cy.get('@cardTitle').contains('button', 'Delete')

    cy.get('@taskInfo').find('h2').contains(task.title)
    cy.get('@taskInfo').find('p').contains(task.description)

    cy.get('[data-test=task-details]').as('taskDetails')
    cy.get('@taskDetails').find('.v-card-title').contains('Task Details')
    cy.get('@taskDetails').find('.v-card-text').contains('in-progress')
    cy.get('@taskDetails').find('.v-card-text').contains('high')
    cy.get('@taskDetails').find('.v-card-text').contains('Due Date')
  })
})
