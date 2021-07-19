/// <reference types="cypress"/>
const itemPost = {
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
const itemPut = {
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
    cy.request('POST', 'https://petstore.swagger.io/v2/pet', itemPost).then((response) => {
        expect(response).to.have.property('status', 200)
    })
})
it('post test1', () => {
    cy.request('POST', 'https://petstore.swagger.io/v2/pet', itemPost).then((response) => {
        expect(response).to.have.property('status', 200)
    })
})
it('GET test',() => {
    cy.request('https://petstore.swagger.io/v2/pet/20').then((response) => {
        expect(response).to.have.property('status', 200)
        expect(response.body).to.not.be.null
        expect(response.body).to.have.property('id',20)
    })
})

it('put test',() => {
    cy.request('PUT', 'https://petstore.swagger.io/v2/pet', itemPut).then((response) => {
        expect(response.body).to.have.property('id',20)
    })
})
it('delete test', () => {
    cy.request('DELETE', 'https://petstore.swagger.io/v2/pet/20').then((response) => {
        expect(response).to.have.property('status', 200)
    })
})