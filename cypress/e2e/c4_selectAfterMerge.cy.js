describe('Selct after merge', () => {
  it('Horizontal to right', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');
    cy.get('td[data-row-index=2][data-col-index=4]')
      .trigger('mousedown');
    cy.get('td[data-row-index=5][data-col-index=4]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');
    cy.get('td[data-row-index=4][data-col-index=3]')
      .trigger('mousedown');
    cy.get('td[data-row-index=2][data-col-index=4]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('td[data-row-index=2][data-col-index=3]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=3][data-col-index=3]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=4][data-col-index=3]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=5][data-col-index=3]')
      .should('have.attr', 'data-selected', 'true');
  })

  it('Horizontal to left', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');
    cy.get('td[data-row-index=2][data-col-index=4]')
      .trigger('mousedown');
    cy.get('td[data-row-index=5][data-col-index=4]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');
    cy.get('td[data-row-index=4][data-col-index=5]')
      .trigger('mousedown');
    cy.get('td[data-row-index=2][data-col-index=4]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('td[data-row-index=2][data-col-index=5]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=3][data-col-index=5]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=4][data-col-index=5]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=5][data-col-index=5]')
      .should('have.attr', 'data-selected', 'true');
  })

  it('Vertical to bottom', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');
    cy.get('td[data-row-index=2][data-col-index=2]')
      .trigger('mousedown');
    cy.get('td[data-row-index=2][data-col-index=4]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');
    cy.get('td[data-row-index=1][data-col-index=3]')
      .trigger('mousedown');
    cy.get('td[data-row-index=2][data-col-index=2]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('td[data-row-index=1][data-col-index=2]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=1][data-col-index=3]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=1][data-col-index=4]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=2][data-col-index=2]')
      .should('have.attr', 'data-selected', 'true');
  })

  it('Vertical to top', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');
    cy.get('td[data-row-index=2][data-col-index=2]')
      .trigger('mousedown');
    cy.get('td[data-row-index=2][data-col-index=4]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');
    cy.get('td[data-row-index=3][data-col-index=3]')
      .trigger('mousedown');
    cy.get('td[data-row-index=2][data-col-index=2]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('td[data-row-index=3][data-col-index=2]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=3][data-col-index=3]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=3][data-col-index=4]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=3][data-col-index=2]')
      .should('have.attr', 'data-selected', 'true');
  })

  it('Mixed', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=10&height=10');
    cy.get('td[data-row-index=1][data-col-index=1]')
      .trigger('mousedown');
    cy.get('td[data-row-index=2][data-col-index=4]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');

    cy.get('td[data-row-index=0][data-col-index=0]')
      .trigger('mousedown');
    cy.get('td[data-row-index=1][data-col-index=0]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');

    cy.get('td[data-row-index=2][data-col-index=5]')
      .trigger('mousedown');
    cy.get('td[data-row-index=5][data-col-index=6]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');

    cy.get('td[data-row-index=4][data-col-index=1]')
      .trigger('mousedown');
    cy.get('td[data-row-index=7][data-col-index=0]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');

    cy.get('td[data-row-index=7][data-col-index=3]')
      .trigger('mousedown');
    cy.get('td[data-row-index=9][data-col-index=3]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');

    cy.get('td[data-row-index=0][data-col-index=6]')
      .trigger('mousedown');
    cy.get('td[data-row-index=0][data-col-index=8]')
      .trigger('mousemove')
      .trigger('mouseup');
    cy.get('[data-merge-button]')
      .trigger('click');

    cy.get('td[data-row-index=1][data-col-index=5]')
      .trigger('mousedown');
    cy.get('td[data-row-index=1][data-col-index=1]')
      .trigger('mousemove')
      .trigger('mouseup');

    cy.get('td[data-row-index=0][data-col-index=0]')
      .should('have.attr', 'data-selected', 'true');

    cy.get('td[data-row-index=0][data-col-index=6]')
      .should('have.attr', 'data-selected', 'true');

    cy.get('td[data-row-index=9][data-col-index=0]')
      .should('have.attr', 'data-selected', 'true');

    cy.get('td[data-row-index=9][data-col-index=8]')
      .should('have.attr', 'data-selected', 'true');

    cy.get('td[data-row-index=0][data-col-index=9]')
      .should('not.have.attr', 'data-selected', 'true');

    cy.get('td[data-row-index=9][data-col-index=9]')
      .should('not.have.attr', 'data-selected', 'true');
  })
})
