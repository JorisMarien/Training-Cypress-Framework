/// <reference types="cypress"/>
beforeEach('intercept',() => {
    cy.visit('https://petstore.swagger.io')
})

it('pressButton',() => {
cy.intercept('post','/v2/pet').as('addPet')
cy.get('#operations-pet-addPet').click()
cy.get('.try-out > .btn').should('be.visible').click()
cy.get('.execute-wrapper > .btn').click()
cy.wait('@addPet').its('response.statusCode').should('eq', 200)
})

it('postFixture', () => {
cy.intercept('post','/v2/pet',{fixture:'\postBody.json'}).as('addPet')
cy.get('#operations-pet-addPet').click()
cy.get('.try-out > .btn').should('be.visible').click()
cy.get('.execute-wrapper > .btn').click()
cy.wait('@addPet').its('response.statusCode').should('eq', 200)
})
