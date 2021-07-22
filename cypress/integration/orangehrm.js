
beforeEach('intercept', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('#txtUsername').type('Admin')
    cy.get('#txtPassword').type('admin123')
    cy.intercept('post', '/index.php/auth/validateCredentials').as('login')
    cy.get('#btnLogin').click()
    cy.wait('@login')
})

it('addEmployee', () => {
    const FILEPATH = 'images/italy.jpg'
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/pim/addEmployee')
    cy.get('#firstName').type('Voornaam')
    cy.get('#lastName').type('Achternaam')
    cy.get('input[type="file"]').attachFile(FILEPATH)
    cy.intercept('post', '/index.php/pim/addEmployee').as('addEmployee')
    cy.get('#btnSave').click()
    cy.wait('@addEmployee')
    cy.get('#btnSave').click()
    cy.get('#personal_optGender_1').click()
    cy.get('#personal_cmbNation').select('Belgian').should('have.value','20')
    cy.get('#personal_cmbMarital').select('Single').should('have.value', 'Single')
    cy.get('#btnSave').click()
})