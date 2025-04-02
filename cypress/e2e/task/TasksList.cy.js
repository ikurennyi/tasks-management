describe('tasks list on ProjectDetails page', () => {
  it('should have filters', () => {
    cy.createThreeTasks()
    cy.get('[data-test=tasks-table').as('table').should('be.visible')

    // priority sorting test
    cy.get('@table').find('tbody').find('tr').eq(0).find('td').eq(1).contains('Third Task')
    cy.get('@table').find('tbody').find('tr').eq(0).find('td').eq(3).contains('high')
    cy.get('@table').find('tbody').find('tr').eq(1).find('td').eq(3).contains('medium')
    cy.get('@table').find('tbody').find('tr').eq(2).find('td').eq(3).contains('low')

    cy.get('[data-test="sort-priority"]').click()
    cy.get('@table').find('tbody').find('tr').eq(0).find('td').eq(3).contains('low')
    cy.get('@table').find('tbody').find('tr').eq(1).find('td').eq(3).contains('medium')
    cy.get('@table').find('tbody').find('tr').eq(2).find('td').eq(3).contains('high')

    // status filtering test
    cy.get('[data-test="filter-status"]').find('button').eq(0).click()
    cy.get('@table').should('not.contain', 'First Task')
    cy.get('[data-test="filter-status"]').find('button').eq(1).click()
    cy.get('@table').should('not.contain', 'Second Task')
    cy.get('[data-test="filter-status"]').find('button').eq(2).click()
    cy.get('@table').should('not.contain', 'Third Task')
    // no tasks at all
    cy.get('@table').find('tbody').find('tr').should('not.exist')
  })

  it('should have action buttons', () => {
    cy.createThreeTasks()
    cy.get('[data-test=tasks-table').as('table').should('be.visible')

    // should be able to delete task
    cy.get('@table')
      .get('tbody tr')
      .find('td')
      .eq(5)
      .find('[data-test=task-actions-delete]')
      .as('deleteBtn')
      .should('exist')

    cy.get('@deleteBtn').click()
    cy.get('@table').find('tbody').find('tr').should('have.length', 2)

    // should be able to edit task
    cy.get('@table')
      .get('tbody tr')
      .find('td')
      .eq(5)
      .find('[data-test=task-actions-edit]')
      .as('editBtn')
      .should('exist')
    cy.get('@editBtn').click()

    cy.get('main').find('[data-test="task-form"]').as('taskForm')

    cy.get('@taskForm')
      .find('[data-test="task-form-title"]')
      .find('input')
      .should('have.value', 'Second Task')
    cy.get('@taskForm')
      .find('[data-test="task-form-status"]')
      .find('button')
      .eq(1)
      .should('have.class', 'v-btn--active')

    cy.get('@taskForm')
      .find('[data-test="task-form-priority"]')
      .find('button')
      .eq(1)
      .should('have.class', 'v-btn--active')

    cy.get('@taskForm')
      .find('[data-test="task-form-description"]')
      .find('textarea')
      .should('have.value', 'Second Task Desc')
  })
})
