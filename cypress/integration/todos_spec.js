// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("Todos", () => {
  it("should visit todos page", () => {
    cy.visit("/todos");
  });

  it('should shows default message', () => {
    cy.get('.todo-prompt').should('have.length.greaterThan', 0);
    cy.get('#todo-pending .title').should('have.text', '0');
    cy.get('#todo-completed .title').should('have.text', '0');
    cy.get('#todo-all .title').should('have.text', '0');
  })

  it('should change state once \'add new\' is clicked', () => {
    cy.contains('adding one').click();

    cy.get('.box > .button').should('have.length.greaterThan', 0);
    cy.get('#todo-pending .title').should('have.text', '1');
    cy.get('#todo-completed .title').should('have.text', '0');
    cy.get('#todo-all .title').should('have.text', '1');

    cy.get('.todo input').first().should('have.attr', 'placeholder', 'Buy Durian at SS2');

    cy.get('#deleteCount').should('have.text', 'Delete All (1)');
  })

  it('should be able to enter a todo.', () => {
    const VALUE = 'read a book';

    cy.get('.todo input')
      .type(VALUE, { delay: 60 }).should('have.value', VALUE);
  });
});

describe('Manipulating One Todo', () => {
  beforeEach(() => {
    cy.visit("/todos");

    const VALUE = 'read a book';

    cy.contains('adding one').click();

    cy.get('.todo input')
      .type(VALUE).should('have.value', VALUE);
  })

  it('should be able to delete a todo.', () => {
    cy.get('.todo a').first().click();
    cy.get('.todo').should('have.length', 0);
  });

  it('should be able to complete a todo.', () => {
    cy.contains('Done').first().click();
    cy.get('.todo').should('have.length', 0);
  });

  it('should be displaying correct time after a todo is finished.', () => {
    const date = new Date().toDateString().split(' ');
    const month = date[1];
    const day = date[2];

    cy.contains('Done').first().click();
    // cy.get('.completed-time').first().should('have.text.match', month);
    cy.contains(month).should('have.length.greaterThan', 0);
    cy.contains(day).should('have.length.greaterThan', 0);
  });

  it('should be deleted once a \'delete all\' is pressed.', () => {
    cy.get('#deleteCount').click();
    cy.get('.todo').should('have.length', 0);
  })
})

describe('Todo Counts', () => {
  beforeEach(() => {
    cy.visit("/todos");

    const VALUE = 'read a book';

    cy.contains('adding one').click();

    cy.get('.todo input')
      .type(VALUE).should('have.value', VALUE);

    cy.get('#addNewTodo').click();

    const SECOND_VALUE = 'eat nasi lemak';
    cy.get('.todo').find('input').eq(1).type(SECOND_VALUE).should('have.value', SECOND_VALUE);


    //aliases
    cy.get('#todo-pending > div > .title').as('pending-count');
    cy.get('#todo-completed > div > .title').as('completed-count');
    cy.get('#todo-all > div > .title').as('all-count');
  })

  it('should have (2) in pending', () => {
    cy.get('@pending-count').should('have.text', '2');
  })

  it('should have (0) in completed', () => {
    cy.get('@completed-count').should('have.text', '0');
  })

  it('should have (2) in all', () => {
    cy.get('@all-count').should('have.text', '2');
  })

  it('should be updated accordingly when a todo is completed', () => {
    cy.get('.todo').eq(1).contains('Done').click();
    cy.contains('eat nasi lemak').parents().should('have.class', 'completed-todo');
    cy.get('@pending-count').should('have.text', '1');
    cy.get('@completed-count').should('have.text', '1');
    cy.get('@all-count').should('have.text', '2');
  })

  it('should be updated accordingly when all todo is completed', () => {
    cy.get('.todo').each(($ele) => {
      cy.wrap($ele).contains('Done').click();
    })

    cy.get('@pending-count').should('have.text', '0');
    cy.get('@completed-count').should('have.text', '2');
    cy.get('@all-count').should('have.text', '2');
  });
});