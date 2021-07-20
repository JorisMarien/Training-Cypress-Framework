/// <reference types="cypress"/>

beforeEach('Visit website', () => {
    cy.visit('https://petstore.swagger.io')
})

it('pressButton', () => {
    cy.get('#operations-pet-getPetById').click()
    cy.get('.try-out > .btn').click()
    cy.get('.parameters-col_description > input').type('30')
    cy.get('.execute-wrapper > .btn').click()

})

