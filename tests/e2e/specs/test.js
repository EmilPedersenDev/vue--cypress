// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Button click adds todo", () => {
    cy.visit("/");

    cy.get("#add-todo-input").type("Clean");

    cy.get("#todo-submit").click();

    cy.get(".todo-item").contains("Clean");
  });

  it("Removes a todo", () => {
    cy.get(".todo-item").contains("Clean");

    cy.get("#delete-todo").click();

    cy.get(".todo-item").should("not.contain", "Clean");
  });
});

describe("adding and removing a product", () => {
  it("Adds a product to the store", () => {
    cy.visit("/");

    cy.get("#product-1").click();

    cy.get("#product-1").should("have.class", "selected");
  });

  it("buys a product", () => {
    cy.get("#buy-btn").click();

    cy.get(".purchase-text").contains("You have purchased!");
  });

  it("removes a product", () => {
    cy.get("#product-1").click();

    cy.get("product-1").should("not.have.class", "selected");
  });
});
