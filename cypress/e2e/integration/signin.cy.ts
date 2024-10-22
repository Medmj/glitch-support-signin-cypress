describe("Glitch Support Signup with Github", () => {
  it("should sign up using Github account", () => {
    cy.visit("/");
    cy.get(".btn-text > .d-button-label").click();
    cy.get(".github").click();

    cy.origin("https://github.com", () => {
      cy.url().should("include", "/login");
      cy.get('input[name="login"]').type(Cypress.env("githubUsername"));
      cy.get('input[name="password"]').type(Cypress.env("githubPassword"), {
        log: false,
      });
      cy.get('input[name="commit"]').click();
    });

    cy.url().should("include", "support.glitch.com");
    cy.get("#site-logo").should("exist").should("be.visible");
    cy.get("#toggle-current-user").should("exist").should("be.visible").click();
  });
});
