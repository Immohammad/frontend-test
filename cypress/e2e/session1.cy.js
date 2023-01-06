describe("A fast journey in site", () => {

  it("Know what the business is about", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("ترابرنت");
    cy.contains("درباره ما").click();
    cy.url().should("include", "/aboutus");
  });

  it("Know where is location of company", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("درباره ما").click();
    cy.get("iframe");
  });

  it("See an image full description", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".card").first().click({ force: true });
    cy.get("h2").should("contain", "شرح تصویر");
  });
  
  it("delete second image of the home", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".card").eq(1).find("button").click({ force: true });
  });
});
