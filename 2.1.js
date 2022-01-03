it('cadastrar/entrar', () => {
    cy.visit('https://www.pedraopvc.com.br/login');
    cy.get('#loginWithUserAndPasswordBtn').click();
    cy.get('[data-i18n="vtexid.forgotPswdHelper"]').click();
    cy.get('#vtexIdUI-email-confirmation > form.ng-pristine > .modal-body').type('testeslojaseplus@gmail.com');
    cy.get('form.ng-dirty > .modal-footer > #sendAccessKeyBtn').click();
    cy.get('#vtexIdUI-change-pswd > form.ng-pristine > .modal-body > :nth-child(2)').type('Teste12345');
    cy.get('#inputConfirmNewPassword').type('Teste12345');
    cy.get('#tryChangePswdBtn').click();
    cy.visit('https://www.pedraopvc.com.br/login');
    cy.get('#loginWithUserAndPasswordBtn').click();
    cy.get('#inputEmail').type('testeslojaseplus@gmail.com');
    cy.get('#inputPassword').type('Teste12345');
    cy.get('#vtexIdUI-form-classic-login > .modal-footer > #classicLoginBtn').click();

})