describe('Separate', () => {
  it('Separate unmerged', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');

    cy.get('td[data-row-index=3][data-col-index=3]')
      .trigger('mousedown')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-separate-button]')
      .trigger('click');

    cy.get('td[data-row-index=3][data-col-index=3]')
      .should('have.attr', 'rowspan', '1')
      .should('have.attr', 'colspan', '1');

    cy.get('td')
      .should('have.length', 49);
  })

  it('Separate few groups at once', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');

    cy.get('td[data-row-index=3][data-col-index=3]')
      .trigger('mousedown');
    cy.get('td[data-row-index=5][data-col-index=4]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');

    cy.get('td[data-row-index=4][data-col-index=5]')
      .trigger('mousedown');
    cy.get('td[data-row-index=5][data-col-index=6]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');

    cy.get('td')
      .should('have.length', 41);

    cy.get('td[data-row-index=3][data-col-index=3]')
      .trigger('mousedown');
    cy.get('td[data-row-index=4][data-col-index=5]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-separate-button]')
      .trigger('click');

    cy.get('td[data-row-index=3][data-col-index=3]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=5][data-col-index=3]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=3][data-col-index=6]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=5][data-col-index=6]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-selected=true]')
      .should('have.length', 12);

    cy.get('td')
      .should('have.length', 49);
  })

  it('Separate selection', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');

    cy.get('td[data-row-index=3][data-col-index=3]')
      .trigger('mousedown');
    cy.get('td[data-row-index=5][data-col-index=4]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');
    cy.get('td')
      .should('have.length', 44);
    cy.get('[data-separate-button]')
      .trigger('click');

    cy.get('td')
      .should('have.length', 49);

    cy.get('td[data-row-index=3][data-col-index=3]')
      .should('have.attr', 'data-selected', 'true');

    cy.get('td[data-row-index=5][data-col-index=4]')
      .should('have.attr', 'data-selected', 'true');

    cy.get('td[data-selected=true]')
      .should('have.length', 6);
  })
})
