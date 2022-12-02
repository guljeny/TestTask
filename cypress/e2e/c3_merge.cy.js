describe('Merge', () => {
  it('Single cell', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');

    cy.get('td[data-row-index=1][data-col-index=0]')
      .trigger('mousedown')
      .trigger('mouseup');

    cy.get('[data-merge-button]')
      .trigger('click');

    cy.get('td[data-row-index=1][data-col-index=0]')
      .should('have.attr', 'rowspan', '1')
      .should('have.attr', 'colspan', '1');

    cy.get('td')
      .should('have.length', 49);
  })

  it('Vertical to bottom', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');
    cy.get('td[data-row-index=1][data-col-index=0]')
      .trigger('mousedown');
    cy.get('td[data-row-index=4][data-col-index=0]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');
    cy.get('td[data-row-index=2][data-col-index=0]')
      .should('not.exist');
    cy.get('td[data-row-index=3][data-col-index=0]')
      .should('not.exist');
    cy.get('td[data-row-index=4][data-col-index=0]')
      .should('not.exist');
    cy.get('td[data-row-index=1][data-col-index=0]')
      .should('have.attr', 'rowspan', '4');
    cy.get('td[data-row-index=1][data-col-index=0]')
      .should('have.attr', 'colspan', '1');
  })

  it('Vertical to top', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');
    cy.get('td[data-row-index=4][data-col-index=2]')
      .trigger('mousedown');
    cy.get('td[data-row-index=1][data-col-index=2]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');
    cy.get('td[data-row-index=2][data-col-index=2]')
      .should('not.exist');
    cy.get('td[data-row-index=3][data-col-index=2]')
      .should('not.exist');
    cy.get('td[data-row-index=1][data-col-index=2]')
      .should('have.attr', 'rowspan', '4');
    cy.get('td[data-row-index=1][data-col-index=2]')
      .should('have.attr', 'colspan', '1');
  })

  it('Horizontal to right', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');
    cy.get('td[data-row-index=4][data-col-index=3]')
      .trigger('mousedown');
    cy.get('td[data-row-index=4][data-col-index=5]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');
    cy.get('td[data-row-index=4][data-col-index=4]')
      .should('not.exist');
    cy.get('td[data-row-index=4][data-col-index=5]')
      .should('not.exist');
    cy.get('td[data-row-index=4][data-col-index=3]')
      .should('have.attr', 'rowspan', '1');
    cy.get('td[data-row-index=4][data-col-index=3]')
      .should('have.attr', 'colspan', '3');
  })

  it('Horizontal to left', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');
    cy.get('td[data-row-index=4][data-col-index=3]')
      .trigger('mousedown');
    cy.get('td[data-row-index=4][data-col-index=1]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');
    cy.get('td[data-row-index=4][data-col-index=2]')
      .should('not.exist');
    cy.get('td[data-row-index=4][data-col-index=3]')
      .should('not.exist');
    cy.get('td[data-row-index=4][data-col-index=1]')
      .should('have.attr', 'rowspan', '1');
    cy.get('td[data-row-index=4][data-col-index=1]')
      .should('have.attr', 'colspan', '3');
  })

  it('Diagonal to bottom right', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');
    cy.get('td[data-row-index=2][data-col-index=3]')
      .trigger('mousedown');
    cy.get('td[data-row-index=5][data-col-index=6]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');
    cy.get('td[data-row-index=2][data-col-index=6]')
      .should('not.exist');
    cy.get('td[data-row-index=5][data-col-index=3]')
      .should('not.exist');
    cy.get('td[data-row-index=2][data-col-index=3]')
      .should('have.attr', 'rowspan', '4');
    cy.get('td[data-row-index=2][data-col-index=3]')
      .should('have.attr', 'colspan', '4');
  })

  it('Diagonal to top left', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');
    cy.get('td[data-row-index=4][data-col-index=3]')
      .trigger('mousedown');
    cy.get('td[data-row-index=1][data-col-index=1]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');
    cy.get('td[data-row-index=4][data-col-index=1]')
      .should('not.exist');
    cy.get('td[data-row-index=1][data-col-index=3]')
      .should('not.exist');
    cy.get('td[data-row-index=1][data-col-index=1]')
      .should('have.attr', 'rowspan', '4');
    cy.get('td[data-row-index=1][data-col-index=1]')
      .should('have.attr', 'colspan', '3');
  })

  it('Selection saved after merge', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');
    cy.get('td[data-row-index=4][data-col-index=5]')
      .trigger('mousedown');
    cy.get('td[data-row-index=1][data-col-index=2]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');
    cy.get('td[data-row-index=1][data-col-index=2]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-selected=true]').should('have.length', 1);
  })

  it('Few meges in table', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');
    cy.get('td[data-row-index=0][data-col-index=0]')
      .trigger('mousedown');
    cy.get('td[data-row-index=1][data-col-index=1]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');

    cy.get('td[data-row-index=3][data-col-index=3]')
      .trigger('mousedown');
    cy.get('td[data-row-index=2][data-col-index=2]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');

    cy.get('td[data-row-index=0][data-col-index=4]')
      .trigger('mousedown');
    cy.get('td[data-row-index=3][data-col-index=5]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');

    cy.get('td[data-row-index=4][data-col-index=6]')
      .trigger('mousedown');
    cy.get('td[data-row-index=6][data-col-index=0]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');

    cy.get('td[data-row-index=0][data-col-index=6]')
      .trigger('mousedown');
    cy.get('td[data-row-index=3][data-col-index=6]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');

    cy.get('td[data-row-index=3][data-col-index=1]')
      .trigger('mousedown');
    cy.get('td[data-row-index=2][data-col-index=0]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');

    cy.get('td')
      .should('have.length', 10);

    cy.get('td[data-row-index=0][data-col-index=0]')
      .trigger('mousedown')
      .trigger('mouseup')
      .should('have.attr', 'data-selected', 'true');

    cy.get('td[data-row-index=0][data-col-index=6]')
      .trigger('mousedown')
      .trigger('mouseup')
      .should('have.attr', 'data-selected', 'true');
  })
})
