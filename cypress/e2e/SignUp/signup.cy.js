describe('Home Page - Sign Up', () => {
  it('Sign Up with Valid User Details', () => {
    cy.visit('/login');
    cy.get('#app').should('exist');
    cy.url().should('include', 'fumopay.dev');
    cy.get('#input-8').type('Testing123');
    cy.get('#input-10').type('eugene.sentle123@gmail.com');
    cy.get('#input-12').type('0833331938');
    cy.get('#input-14').click();
    cy.contains('Airlines, Air Carriers').should('be.visible').click();
    cy.get(
      '.v-card-text > .v-select > .v-input__control > .v-field > .v-field__append-inner > .mdi-menu-down'
    ).click();
    cy.contains('Charity').click();
    cy.get('#input-20').type('Reg-20220601-VAT2325475');
    cy.get('#input-22').type('2023');
    cy.get(
      ':nth-child(3) > .v-select > .v-input__control > .v-field > .v-field__append-inner > .mdi-menu-down'
    ).click();
    cy.contains('Business')
      .should('be.visible')
      .then(($element) => {
        expect($element).to.be.visible;
      });
    cy.contains('Mail To').click();
    cy.get('#input-29').type('27 Old Gloucester Street');
    cy.get('#input-31').type('London');
    cy.get('#input-33').type('United Kingdown');
    cy.get('#input-35').type('WC1N 3AX');
    cy.get('#input-37').type('3AX');
    cy.contains('United Kingdom').should('be.visible');
    cy.get(
      ':nth-child(3) > .v-autocomplete > .v-input__control > .v-field > .v-field__append-inner > .mdi-menu-down'
    ).click();
    cy.get('.v-list').should('be.visible');
    cy.get('.v-list').contains('United Kingdom').click();
    cy.get('#checkbox-53').check();
    cy.get('#checkbox-60').check();
    cy.get('#input-43').type('Eugene Sentle');
    let emailaddress;
    cy.get('#input-10')
      .invoke('val')
      .then((val) => {
        emailaddress = val;
      })
      .then(() => {
        cy.log('Office title: ' + emailaddress);
        cy.get('#input-45').type(emailaddress);
      });
    cy.get('#input-47').type('Pa33word123!');
    cy.get('.px-4 > .v-btn > .v-btn__content').click();
    cy.contains('Unable to create merchant').then(($element) => {
      expect($element).to.exist;
    });
  });

  it('Sign Up with Incomplete Invalid User Details', () => {
    cy.visit('/login');
    cy.get('#app').should('exist');
    cy.url().should('include', 'fumopay.dev');
    cy.get('#input-8').type('Testing123$$');
    cy.get('#input-10').type('eugene.sentle123@gmail123@@##@');
    cy.get('#input-12').type('testnumber validation');
    cy.get('.px-4 > .v-btn > .v-btn__content').click();
    cy.contains('Business Bank Category is required').should('be.visible');
    cy.contains('Phone Number must be valid').should('be.visible');
    cy.contains('Company number is required').should('be.visible');
    cy.contains('Post code is required').should('be.visible');
    cy.contains('Town/City is required').should('be.visible');
    cy.contains('Line 1 is required').should('be.visible');
    cy.contains('Name is required').should('be.visible');
    cy.contains('E-mail is required').should('be.visible');
    cy.contains('Password is required').should('be.visible');
  });

  it('Test System Validation for Submitting with no Details', () => {
    cy.visit('/login');
    cy.get('#app').should('exist');
    cy.url().should('include', 'fumopay.dev');
    cy.get('.px-4 > .v-btn > .v-btn__content').click()
    cy.get('#input-12').type('testnumber validation');
    cy.get('.px-4 > .v-btn > .v-btn__content').click();
    cy.contains('Business Bank Category is required').should('be.visible');
    cy.contains('Phone Number must be valid').should('be.visible');
    cy.contains('Company number is required').should('be.visible');
    cy.contains('Post code is required').should('be.visible');
    cy.contains('Town/City is required').should('be.visible');
    cy.contains('Line 1 is required').should('be.visible');
    cy.contains('Name is required').should('be.visible');
    cy.contains('E-mail is required').should('be.visible');
    cy.contains('Password is required').should('be.visible');
  });
});
