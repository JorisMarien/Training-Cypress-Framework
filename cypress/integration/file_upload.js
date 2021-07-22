describe('file upload', () => {
    beforeEach('visit website', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
    })
    it('upload_image', () => {
        const UPLOAD = require('../PageJson/uploadPage')
        const FILEPATH = 'images/italy.jpg'
        cy.get(UPLOAD.uploadButton).attachFile(FILEPATH)
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('italy.jpg')
    })
})