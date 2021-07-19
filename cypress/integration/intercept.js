/// <reference types="cypress"/>
beforeEach('intercept',() => {
    cy.visit('https://petstore.swagger.io')
})

it('pressButton',() => {

cy.intercept("https://petstore.swagger.io/#/pet/addPet").as('addPet')
cy.get('#operations-pet-addPet').click()

cy.get('.try-out > .btn').should('be.visible')

cy.get('.try-out > .btn').click()
})