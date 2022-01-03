Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

it('comprando produto', () => {
    cy.viewport(320, 658)
    cy.visit('https://www.pedraopvc.com.br/lavadora-de-alta-pressao-1200w-com-1500psi-127v---tramontina-39974/p')
    cy.get('.product-main__quantity__plus').click()
    cy.get('#txtCep').type('01202001')
    cy.get('#btnFreteSimulacao').click()
    cy.get('.buy-button').click()
    cy.get('.text-button-cookie').click()
    cy.get('.navbar-header > .menu > .menu__item > .minicart > .minicart__footer > .minicart__buttons > .minicart__buy-button > .btn').click()
    cy.get('#cart-to-orderform').click()
})
it('finalizando compra', () => {
    cy.viewport('iphone-6')
        cy.get('#client-pre-email').type("testelojaseplus@gmail.com{enter}")
        cy.get('#client-first-name').type('teste')
        cy.get('#client-last-name').type('teste')
        cy.get('#client-document').type('12516043821')
        cy.get('#client-phone').type('11985053373')
        cy.get('#go-to-shipping').click()
        cy.get('#ship-postalCode').type('01202001')
        cy.get('#ship-number').type('89')
        cy.get('#ship-complement').type('casa-2')
        cy.get('#ship-receiverName').type('testando')
        cy.get('#btn-go-to-payment').click()
        cy.get('#payment-group-bankInvoicePaymentGroup').click()
        cy.get('[data-bind="fadeVisible: !window.router.sac.isActive() && window.paymentData.isPaymentButtonVisible(), click: submit, disable: window.checkout.disablePaymentButton"]').click()
    })