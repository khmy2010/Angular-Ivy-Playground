// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("Todos", () => {
  it("should visit todos page", () => {
    cy.visit("/todos");
  });

  it('should shows default message', () => {
    cy.get('.todo-prompt').should('have.length.greaterThan', 0);
  })

  it('should change state once \'add new\' is clicked', () => {
    cy.contains('adding one').click();

    cy.get('.box > .button').should('have.length.greaterThan', 0);
  })
});