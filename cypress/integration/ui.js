describe('My First Test', () => {
    beforeEach('Visit website', () => {
        cy.visit('https://petstore.swagger.io')
    })

    it('pressButton', () => {
        cy.get('#operations-pet-getPetById').click()
        cy.get('.try-out > .btn').click()
        cy.get('.parameters-col_description > input').type('30')
        cy.get('#get_pet__petId__responses_select')
        .select('application/xml')
        .should('have.value','application/xml')
        cy.get('.execute-wrapper > .btn').click()

    })
})



