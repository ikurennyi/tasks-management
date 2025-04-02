const projectTitle = 'First Project'
const updatedProjectTitle = ' Title'

describe('project', () => {
  describe('create', () => {
    beforeEach(() => {
      cy.visit('/projects/new')
      cy.get('main').as('mainSection')

      cy.get('@mainSection').find('[data-test=project-form]').as('projectForm')
      cy.get('@projectForm').find('button', 'Create').as('submitBtn')
    })

    it('has correct form page', () => {
      cy.get('@mainSection').contains('button', 'Go Back')
      cy.get('@projectForm').should('be.visible')
      cy.get('@projectForm').contains('h4', 'New Project')
      cy.get('@projectForm').find('[data-test="project-form-title"]').should('be.visible')
      cy.get('@projectForm').find('[data-test="project-form-description"]').should('be.visible')
    })

    it('can not be done without title', () => {
      cy.get('@submitBtn').click()
      cy.get('@projectForm').should('be.visible')
    })

    it('can be created with title', () => {
      cy.createProject()
      cy.get('@mainSection').find('[data-test="projects-list"]').contains('.v-card', projectTitle)
    })
  })

  describe('is exists', () => {
    beforeEach(() => {
      cy.createProject()
      cy.visitFirstProject()
    })

    it('can be edited, but not submitted', () => {
      cy.get('[data-test=project-main]').contains('button', 'Edit').click()
      cy.get('main').find('[data-test=project-form]').should('be.visible')
      cy.get('[data-test="project-form-title"]').type(updatedProjectTitle)
      cy.get('[data-test=project-form]').contains('button', 'Update').click()
      cy.get('main').find('[data-test=project-form]').should('be.visible')
    })

    describe('can be deleted', () => {
      it('from the ProjectDetails page', () => {
        cy.get('[data-test=project-main]').contains('h2', projectTitle)
        cy.get('[data-test=project-main]').contains('button', 'Delete Project').click()
        cy.get('main').contains('h2', 'Ready to start a new project')
      })

      it('from the edit project page', () => {
        cy.createProject()
        cy.visitFirstProject()

        cy.get('[data-test=project-main]').contains('button', 'Edit').click()
        cy.get('[data-test=project-form]').contains('button', 'Delete').click()
        cy.get('main').contains('h2', 'Ready to start a new project')
      })
    })
  })

  it('can not visit non-existing project', () => {
    cy.visit('/projects/aaa')
    cy.get('main').contains('h2', 'Ready to start a new project')
  })
})
