describe('Simple select', () => {
  it('Select one item', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');
    cy.get('td[data-row-index=2][data-col-index=2]')
      .trigger('mousedown')
      .trigger('mouseup')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-selected=true]').should('have.length', 1);
  })

  it('Select one item and continue moove mouse', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');
    cy.get('td[data-row-index=2][data-col-index=2]')
      .trigger('mousedown')
      .trigger('mouseup')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=5][data-col-index=5]')
      .trigger('mousemove')
      .should('not.have.attr', 'data-selected', 'true');
    cy.get('td[data-selected=true]').should('have.length', 1);
  })

  it('Select one then another', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');
    cy.get('td[data-row-index=2][data-col-index=2]').as('firstCell');
    cy.get('@firstCell')
      .trigger('mousedown')
      .trigger('mouseup')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=5][data-col-index=5]')
      .trigger('mousedown')
      .trigger('mouseup')
      .should('have.attr', 'data-selected', 'true');
    cy.get('@firstCell')
      .should('not.have.attr', 'data-selected', 'true');
    cy.get('td[data-selected=true]').should('have.length', 1);
  })

  it('Select one then another and return to first', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');
    cy.get('td[data-row-index=2][data-col-index=3]').as('firstCell');
    cy.get('td[data-row-index=4][data-col-index=5]').as('targetCell')
    cy.get('@firstCell')
      .trigger('mousedown')
      .trigger('mouseup')
      .should('have.attr', 'data-selected', 'true');
    cy.get('@targetCell')
      .trigger('mousedown')
      .trigger('mouseup')
      .should('have.attr', 'data-selected', 'true');
    cy.get('@firstCell')
      .trigger('mousedown')
      .trigger('mouseup')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=2][data-col-index=2]')
      .should('not.have.attr', 'data-selected', 'true');
    cy.get('td[data-selected=true]').should('have.length', 1);
  })

  it('Move mouse over single element', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');
    cy.get('td[data-row-index=1][data-col-index=1]').as('firstCell')
    cy.get('@firstCell')
      .trigger('mousedown')
      .trigger('mousemove')
      .trigger('mouseup')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-selected=true]').should('have.length', 1);
  })

  it('Move mouse right', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');
    cy.get('td[data-row-index=3][data-col-index=3]').as('firstCell')
    cy.get('td[data-row-index=3][data-col-index=5]').as('targetCell')
    cy.get('@firstCell').trigger('mousedown')
    cy.get('@targetCell')
      .trigger('mousemove')
      .trigger('mouseup')
      .should('have.attr', 'data-selected', 'true');
    cy.get('@firstCell')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=3][data-col-index=4]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-selected=true]').should('have.length', 3);
  })

  it('Move mouse left', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');
    cy.get('td[data-row-index=3][data-col-index=3]').as('firstCell')
    cy.get('td[data-row-index=3][data-col-index=1]').as('targetCell')
    cy.get('@firstCell').trigger('mousedown')
    cy.get('@targetCell')
      .trigger('mousemove')
      .trigger('mouseup')
      .should('have.attr', 'data-selected', 'true');
    cy.get('@firstCell')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=3][data-col-index=2]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-selected=true]').should('have.length', 3);
  })

  it('Move mouse top', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');
    cy.get('td[data-row-index=3][data-col-index=3]').as('firstCell')
    cy.get('td[data-row-index=1][data-col-index=3]').as('targetCell')
    cy.get('@firstCell').trigger('mousedown');
    cy.get('@targetCell')
      .trigger('mousemove')
      .trigger('mouseup')
      .should('have.attr', 'data-selected', 'true');
    cy.get('@firstCell')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=2][data-col-index=3]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-selected=true]').should('have.length', 3);
  })

  it('Move mouse bottom', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');
    cy.get('td[data-row-index=3][data-col-index=3]').as('firstCell')
    cy.get('td[data-row-index=5][data-col-index=3]').as('targetCell')
    cy.get('@firstCell').trigger('mousedown');
    cy.get('@targetCell')
      .trigger('mousemove')
      .trigger('mouseup')
      .should('have.attr', 'data-selected', 'true');
    cy.get('@firstCell')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=4][data-col-index=3]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-selected=true]').should('have.length', 3);
  })

  it('Move mouse bottom-right', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');
    cy.get('td[data-row-index=3][data-col-index=3]').as('firstCell')
    cy.get('td[data-row-index=5][data-col-index=6]').as('targetCell')
    cy.get('@firstCell').trigger('mousedown')
    cy.get('@targetCell')
      .trigger('mousemove')
      .trigger('mouseup')
      .should('have.attr', 'data-selected', 'true');
    cy.get('@firstCell')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=3][data-col-index=6]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=5][data-col-index=3]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-selected=true]').should('have.length', 12);
  })

  it('Move mouse bottom-left', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');
    cy.get('td[data-row-index=3][data-col-index=3]').as('firstCell')
    cy.get('td[data-row-index=5][data-col-index=0]').as('targetCell')
    cy.get('@firstCell').trigger('mousedown')
    cy.get('@targetCell')
      .trigger('mousemove')
      .trigger('mouseup')
      .should('have.attr', 'data-selected', 'true');
    cy.get('@firstCell')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=3][data-col-index=0]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=5][data-col-index=3]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-selected=true]').should('have.length', 12);
  })

  it('Move mouse top-right', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');
    cy.get('td[data-row-index=3][data-col-index=3]').as('firstCell')
    cy.get('td[data-row-index=1][data-col-index=6]').as('targetCell')
    cy.get('@firstCell').trigger('mousedown')
    cy.get('@targetCell')
      .trigger('mousemove')
      .trigger('mouseup')
      .should('have.attr', 'data-selected', 'true');
    cy.get('@firstCell')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=3][data-col-index=6]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=1][data-col-index=3]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-selected=true]').should('have.length', 12);
  })
  
  it('Move mouse top-left', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');
    cy.get('td[data-row-index=3][data-col-index=3]').as('firstCell')
    cy.get('td[data-row-index=1][data-col-index=0]').as('targetCell')
    cy.get('@firstCell').trigger('mousedown')
    cy.get('@targetCell')
      .trigger('mousemove')
      .trigger('mouseup')
      .should('have.attr', 'data-selected', 'true');
    cy.get('@firstCell')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=3][data-col-index=0]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=1][data-col-index=3]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-selected=true]').should('have.length', 12);
  })

  it('Diagonal complex selection', () => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000/?width=7&height=7');
    cy.get('td[data-row-index=3][data-col-index=3]').as('firstCell')
    cy.get('@firstCell').trigger('mousedown')

    cy.get('td[data-row-index=1][data-col-index=0]')
      .trigger('mousemove')
      .should('have.attr', 'data-selected', 'true');
    cy.get('@firstCell')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=3][data-col-index=0]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=1][data-col-index=3]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-selected=true]').should('have.length', 12);

    cy.get('td[data-row-index=5][data-col-index=6]')
      .trigger('mousemove')
      .should('have.attr', 'data-selected', 'true');
    cy.get('@firstCell')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=3][data-col-index=6]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=5][data-col-index=3]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=1][data-col-index=0]')
      .should('not.have.attr', 'data-selected', 'true');
    cy.get('td[data-selected=true]').should('have.length', 12);

    cy.get('td[data-row-index=1][data-col-index=6]')
      .trigger('mousemove')
      .should('have.attr', 'data-selected', 'true');
    cy.get('@firstCell')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=1][data-col-index=6]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=3][data-col-index=6]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=5][data-col-index=6]')
      .should('not.have.attr', 'data-selected', 'true');
    cy.get('td[data-selected=true]').should('have.length', 12);

    cy.get('td[data-row-index=6][data-col-index=0]')
      .trigger('mousemove')
      .trigger('mouseup')
      .should('have.attr', 'data-selected', 'true');
    cy.get('@firstCell')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=3][data-col-index=0]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=6][data-col-index=3]')
      .should('have.attr', 'data-selected', 'true');
    cy.get('td[data-row-index=1][data-col-index=6]')
      .should('not.have.attr', 'data-selected', 'true');
    cy.get('td[data-selected=true]').should('have.length', 16);
  })
})

