describe("My first passing cypress test", () => {
  it("Should pass", () => {
    expect(true).to.equal(true);
  });
});

describe("My fist test", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type");
  });
});
