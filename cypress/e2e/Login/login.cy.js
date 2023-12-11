describe("Home Page - Login", () => {
  beforeEach(() => {
    cy.login("username", "password");
  });
  it("Login Attempt Details", () => {
    cy.visit("/login");
  });

  it("Reset Password", () => {
    cy.visit("/");
    cy.get(".mdi-login").click();
    cy.get("#input-65").type(Cypress.env("username"));
    cy.get("#input-67").type(Cypress.env("password"));
    cy.get('[outlined=""] > .v-btn__content').click();
    cy.get(".v-card-actions").click();
  });
});
