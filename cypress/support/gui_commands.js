Cypress.Commands.add('login', (
    email = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
    { cacheSession = true } = {},
  ) => {
    const login = () => {
      cy.visit('/login')
      cy.get('input[name=email]').type(email)
      cy.get('input[name=password]').type(password)
      cy.get('button[type=submit]').click()
  }

  const validate = () => {
    cy.visit('/')
    cy.location('pathname', { timeout: 1000 })
      .should('not.eq', '/login')
  }

const options = {
    cacheAcrossSpecs: true,
    validate,
  }

  if (cacheSession) {
    cy.session(user, login, options)
  } else {
    login()
  }
})
  

  

 


 