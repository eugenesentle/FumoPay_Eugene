Cypress.session.clearAllSavedSessions();
Cypress.Commands.add("login", (username, password) => {
  cy.session(
    [username, password],
    () => {
      cy.visit("/");
      cy.get(".mdi-login").click();
      cy.get("#input-65").type(Cypress.env("username"));
      cy.get("#input-67").type(Cypress.env("password"));
      cy.get("#app").should("exist");
      cy.url().should("include", "fumopay.dev");
      cy.get(".v-card-actions > .elevation-4").click();
      cy.get(".v-card > .text-red").should("be.visible");
    },
    {
      cacheAcrossSpecs: true,
    }
  );
});
