describe('Generate grid', () => {
  it('Small grid', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=5');
    cy.get('tr').should('have.length', 5);
    cy.get('tr').each(($el) => {
      cy.wrap($el).find('td').should('have.length', 7);
    });
  })

  it('Big grid', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=80&height=100');
    cy.get('tr').should('have.length', 100);
    cy.get('tr').each(($el) => {
      cy.wrap($el).find('td').should('have.length', 80);
    });
  })
})

