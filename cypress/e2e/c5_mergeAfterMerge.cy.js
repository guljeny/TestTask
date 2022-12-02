describe('Merge after merge', () => {
  it('V1', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');

    cy.get('td[data-row-index=1][data-col-index=1]')
      .trigger('mousedown');
    cy.get('td[data-row-index=4][data-col-index=1]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');

    cy.get('td[data-row-index=1][data-col-index=3]')
      .trigger('mousedown');
    cy.get('td[data-row-index=4][data-col-index=3]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');

    cy.get('td[data-row-index=2][data-col-index=4]')
      .trigger('mousedown');
    cy.get('td[data-row-index=3][data-col-index=4]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');

    cy.get('td[data-row-index=1][data-col-index=0]')
      .trigger('mousedown');
    cy.get('td[data-row-index=1][data-col-index=4]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');

    cy.get('td[data-row-index=1][data-col-index=0]')
      .should('have.attr', 'rowspan', '4')
      .should('have.attr', 'colspan', '5')
      .should('have.attr', 'data-selected', 'true');

    cy.get('td')
      .should('have.length', 30)
  })

  it('V2', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');

    cy.get('td[data-row-index=1][data-col-index=0]')
      .trigger('mousedown');
    cy.get('td[data-row-index=4][data-col-index=0]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');

    cy.get('td[data-row-index=3][data-col-index=1]')
      .trigger('mousedown');
    cy.get('td[data-row-index=6][data-col-index=2]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');

    cy.get('td[data-row-index=2][data-col-index=1]')
      .trigger('mousedown');
    cy.get('td[data-row-index=1][data-col-index=0]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');

    cy.get('td[data-row-index=1][data-col-index=0]')
      .should('have.attr', 'rowspan', '6')
      .should('have.attr', 'colspan', '3');

    cy.get('td[data-row-index=0][data-col-index=3]')
      .trigger('mousedown');
    cy.get('td[data-row-index=4][data-col-index=6]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');

    cy.get('td[data-row-index=0][data-col-index=3]')
      .should('have.attr', 'rowspan', '5')
      .should('have.attr', 'colspan', '4');

    cy.get('td[data-row-index=0][data-col-index=2]')
      .trigger('mousedown');
    cy.get('td[data-row-index=0][data-col-index=3]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');

    cy.get('td[data-row-index=0][data-col-index=0]')
      .should('have.attr', 'rowspan', '7')
      .should('have.attr', 'colspan', '7');

    cy.get('td')
      .should('have.length', 1)
      .should('have.attr', 'data-selected', 'true');
  })
})
