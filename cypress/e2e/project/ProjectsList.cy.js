describe('ProjectList page', () => {
  it('should have initial state', () => {
    cy.visit('/')
    cy.get('main').as('mainSection')

    // header
    cy.get('header .v-toolbar-title__placeholder a').contains('Tasks Management App')
    cy.get('[data-test="test-guards"]').contains('a', 'Non-Existent Project')
    cy.get('[data-test="test-guards"]').contains('a', 'Non-Existent Task')

    // main section
    cy.get('@mainSection').contains('h2', 'All Projects')
    cy.get('@mainSection').contains('button', 'Populate Projects')
    cy.get('@mainSection').contains('button', 'Add New Project')

    // empty screen
    cy.get('@mainSection').contains('h2', 'Ready to start a new project')
    cy.get('@mainSection').contains('h4', ' Try to get them by clicking the button ')

    cy.get('@mainSection').find('h4').contains('strong', 'POPULATE PROJECTS')
  })

  it('can populate projects', () => {
    cy.visit('/')

    cy.get('main [data-test=populate-projects]').click()
    cy.get('main').contains('Loading...')

    cy.get('.v-row').find('.v-card-item').should('be.visible')
  })
})
