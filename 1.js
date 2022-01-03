/// <reference types="cypress"/>

describe('Teste PedraoPVC', () => {
    it('visitar', () => {
        cy.visit('https://www.pedraopvc.com.br/')
        //cy.wait(10000)
        cy.get('[style="display: none"] > .newsletter__input--txt').type('vitor luis')
        cy.get(':nth-child(2) > .newsletter__input--txt').type('vitor.luis1303@gmail.com')
        cy.screenshot()
        cy.get('.menu > :nth-child(2) > [href="/pisos-e-revestimentos"]').click()
        cy.wait(5000)
        cy.screenshot()
        cy.get(':nth-child(3) > [href="/loucas"]').click()
        cy.wait(5000)
        cy.screenshot()
        cy.get(':nth-child(4) > [href="/metais"]').click()
        cy.wait(5000)
        cy.screenshot()
        cy.get(':nth-child(5) > [href="/cozinha"]').click()
        cy.wait(5000)
        cy.screenshot()
        cy.get(':nth-child(6) > [href="/hidraulica"]').click()
        cy.wait(5000)
        cy.screenshot()
        cy.get(':nth-child(7) > [href="/eletrica"]').click()
        cy.wait(5000)
        cy.screenshot()
        cy.get(':nth-child(8) > [href="/moveis"]').click()
        cy.wait(5000)
        cy.screenshot()
        cy.get('.ofertas > a').click()
        cy.wait(5000)
        cy.screenshot()
        cy.get('.menu__item--favorites > a').click()
        cy.wait(5000)
        cy.screenshot()
        cy.visit('https://www.pedraopvc.com.br/')

        
       




       // cy.viewport('macbook-15')
       // cy.wait(200)
       // cy.viewport('macbook-13')
       // cy.wait(200)
       // cy.viewport('macbook-11')
       // cy.wait(200)
     //   cy.viewport('ipad-2')
      //  cy.wait(200)
       // cy.viewport('ipad-mini')
        //cy.wait(200)
      //  cy.viewport('iphone-6+')
      //  cy.wait(200)
       // cy.viewport('iphone-6')
     //   cy.wait(200)
       // cy.viewport('iphone-5')
       // cy.wait(200)
        //cy.viewport('iphone-4')
      //  cy.wait(200)
       // cy.viewport('iphone-3')
       // cy.wait(200)//
    })
   
})
