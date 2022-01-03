Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    debugger
    return false
});

Cypress.on('fail', (err) => {
    debugger
});
it('pesquisando produtos', () => {
    cy.visit('https://www.pedraopvc.com.br/')
    //cy.get('.av-col-sm-24 > .header__search > .search__form > .search__input').type('chuveiro {enter}')//
})
it('comprando produto', () => {
    cy.visit('https://www.pedraopvc.com.br/lavadora-de-alta-pressao-1200w-com-1500psi-127v---tramontina-39974/p')
    cy.get('#txtCep').type('01202001')
    cy.get('#btnFreteSimulacao').click()
    cy.get('.buy-button').click()
    cy.get('.av-col-sm-24 > .menu > .menu__item--minicart > .minicart > .minicart__footer > .minicart__buttons > .minicart__buy-button > .btn').click()
    cy.get('#cart-to-orderform').click()
    cy.get('#client-pre-email').type('testeslojaseplus@gmail.com{enter}')
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
    })

