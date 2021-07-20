/// <reference types="cypress"/>
const URL = 'https://petstore.swagger.io/v2/pet'
const ITEMPOST = {
    "id": 20,
    "category": {
        "id": 0,
        "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
        "string"
    ],
    "tags": [
        {
            "id": 0,
            "name": "string"
        }
    ],
    "status": "available"
}
const ITEMPUT = {
    "id": 20,
    "category": {
        "id": 0,
        "name": "string"
    },
    "name": "doggieTail",
    "photoUrls": [
        "string"
    ],
    "tags": [
        {
            "id": 0,
            "name": "string"
        }
    ],
    "status": "unavailable"
}

it('Post test', function () {
    cy.request('POST', URL, ITEMPOST).then((response) => {
        expect(response).to.have.property('status', 200)
    })
})
it('post test1', () => {
    cy.fixture('postBody.json').then(petInformation => {
        cy.request('POST', URL, petInformation).then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.have.property('id', 20)
        })
    })

})
it('GET test', () => {
    cy.request(URL + '/20').then((response) => {
        expect(response).to.have.property('status', 200)
        expect(response.body).to.not.be.null
        expect(response.body).to.have.property('id', 20)
    })
})

it('put test', () => {
    cy.request('PUT', URL, ITEMPUT).then((response) => {
        expect(response.body).to.have.property('id', 20)
    })
})
it('delete test', () => {
    cy.request('DELETE', URL + '/20').then((response) => {
        expect(response).to.have.property('status', 200)
    })
})