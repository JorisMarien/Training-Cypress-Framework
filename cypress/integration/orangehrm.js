/// <reference types="cypress"/>

it ('login', ()=>{
cy.visit('https://opensource-demo.orangehrmlive.com/')
cy.get('#txtUsername').type('Admin')
cy.get('#txtPassword').type('admin123')
cy.intercept('post', '/index.php/auth/validateCredentials').as('login')

cy.get('#btnLogin').click()
cy.wait('@login')
})