describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/hello');
    cy.get('p-dropdown[id=myDropdown]').click();
    cy.get('p-dropdown[id=myDropdown] ul').contains('Rome');
    cy.get('p-dropdown[id=myDropdown] ul').should('contain', 'Rome');
  });
});
