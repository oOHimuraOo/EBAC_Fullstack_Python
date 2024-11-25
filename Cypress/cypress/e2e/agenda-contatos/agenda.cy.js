/// <reference types="cypress" />

const mock = {
    data: [
    {
        id: 1,
        name: 'Felipe', 
        email: 'teste1@gmail.com',
        phone: '(71) 1 1111-1111'
    },
    {
        id: 2,
        name: 'Manuel',  
        email: 'teste2@gmail.com',
        phone: '(71) 2222-2222'
    },
    {
        id: 3,
        name: 'Eduardo',  
        email: 'teste3@gmail.com',
        phone: '(71) 3333-3333'
    }
]
}

const newValue = {
    name: 'Gian',
    email: 'teste4@gmail.com',
    phone: '(71) 4444-4444'
}

const newDelete = {
    name: 'Andre',
    email: 'teste5@gmail.com',
    phone: '(71) 5555-5555'
}

const newEdit = {
    name: 'Matias',
    email: 'teste6@gmail.com',
    phone: '(71) 6666-6666'
}

describe('Deve testar a agenda', () => {
    beforeEach(() => {
        // cy.clearLocalStorage()
        // cy.clearCookies()

        // cy.intercept('GET', 'https://fake-api-tau.vercel.app/api/contatos', {
        //     statusCode: 200,
        //     body: mock,  
        // }).as('getContatos')

        // cy.intercept('POST', 'https://fake-api-tau.vercel.app/api/contatos', (req)=> {
        //     mock.data.push({id: 4, ...JSON.parse(req.body).contato})
        //     req.reply({
        //         statusCode:201,
        //         body: mock
        //     })
        // }).as('postContatos')
        
        // Tentei fazer atravez da interceptação da api mas por algum motivo o segundo teste ignorava completamente a  interceptação. Por isso resolvi serguir em frente sem interceptação.
        // cy.intercept('DELETE', 'https://fake-api-itau.vercel.app/api/contatos', (req) => {
        //     const { id } = JSON.parse(req.body)
        //     mock.data = mock.data.filter(contato => contato.id !== id)
        //     cy.debug()
        //     req.reply({
        //         statusCode:200,
        //         body: mock
        //     })
        // }).as('deleteContatos')

        // cy.intercept('PUT', 'https://fake-api-itau.vercel.app/api/contatos', (req) => {
        //     const { contato } = JSON.parse(req.body)
        //     const index = mock.data.findIndex(c => c.id === contato.id)

        //     if (index !== -1) {
        //         mock.data[index] = {...mock.data[index], ...contato}
        //     }

        //     req.reply({
        //         statusCode: 200,
        //         body: mock
        //     })
        // }).as('putContatos')

        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('verifica se inclui novo contato', () => {
        cy.get('[type="text"]').type(newValue.name)
        cy.get('[type="email"]').type(newValue.email)
        cy.get('[type="tel"]').type(newValue.phone)
        
        cy.get('.adicionar').click()
        
        cy.contains(newValue.name).should('exist')
        cy.contains(newValue.email).should('exist')
        cy.contains(newValue.phone).should('exist')
    })

    it ('verifica se o ultimo contato foi removido', () => {
        cy.get(".sc-iAEyYk").children().its('length').then((ic) => {
            cy.get('.delete').last().click()
            cy.wait(20000)

            cy.get(".sc-iAEyYk").children().its('length').then((fc) => {
                expect(fc).to.lessThan(ic)
            })
        })
    })

    it ('verifica se um contato foi editado', () => {
        cy.get('.edit').last().click()

        cy.get('[type="text"]').clear().type(newEdit.name)
        cy.get('[type="email"]').clear().type(newEdit.email)
        cy.get('[type="tel"]').clear().type(newEdit.phone)
        
        cy.get('.alterar').click()
        
        cy.contains(newEdit.name).should('exist')
        cy.contains(newEdit.email).should('exist')
        cy.contains(newEdit.phone).should('exist')
    })
})