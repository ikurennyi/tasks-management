describe('ProjectDetails', () => {
  describe('with populated projects', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.get('main [data-test=populate-projects]').click()
      cy.get('.v-row').find('.v-card').first().click()
      cy.get('main').contains('Loading...')
    })

    it('should have all control buttons for both project and tasks', () => {
      cy.get('[data-test=project-main]').contains('button', 'Edit')
      cy.get('[data-test=project-main]').contains('button', 'Delete Project')

      cy.get('[data-test=tasks-controls]').contains('button', 'Add New Task')

      // filters by status
      cy.get('[data-test=tasks-controls]').find('.v-btn-group').contains('button', 'pending')
      cy.get('[data-test=tasks-controls]').find('.v-btn-group').contains('button', 'in-progress')
      cy.get('[data-test=tasks-controls]').find('.v-btn-group').contains('button', 'completed')

      // sort by priority button
      cy.get('[data-test=tasks-controls]').contains('button', 'Sort by Priority')
    })

    it('should have prepopulated tasks', () => {
      cy.get('[data-test="tasks-table"]').as('table').should('be.visible')
      cy.get('@table').contains('th', 'ID')
      cy.get('@table').contains('th', 'Status')
      cy.get('@table').contains('th', 'Priority')
      cy.get('@table').contains('th', 'Due Date')

      cy.get('@table').find('tr').should('have.length', 6)

      cy.get('@table').find('tbody tr').first().find('td').should('have.length', 6)
      cy.get('@table').find('[data-test="task-table-actions"]').should('be.visible')
    })
  })
})
