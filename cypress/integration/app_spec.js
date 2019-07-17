// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
describe("First test", () => {
  it("should visit posts page", () => {
    cy.visit("/posts");
  });

  it('should shows a list of cards', () => {
    cy.get('.card').should('have.length.greaterThan', 0);
  })

  it('should load post page properly.', () => {
    cy.get('.card:first').click();
    cy.url().should('include', '/posts/post');
    cy.contains('Back to all post').should('be.visible');
  })
});