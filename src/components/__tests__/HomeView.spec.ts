import HomeView from '../../views/HomeView.vue'

describe('HomeView', () => {
  it('playground', () => {
    cy.mount(HomeView, { props: { msg: 'Hello Cypress' } })
  })

  it('renders properly', () => {
    cy.mount(HomeView, { props: { msg: 'Hello Cypress' } })
    cy.get('main').should('contain', 'Hello Cypress')
  })
})
