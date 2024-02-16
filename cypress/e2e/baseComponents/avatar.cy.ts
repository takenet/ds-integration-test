describe('Test component', () => {
  it('should click on the button to test the Avatar component', () => {
    // Aviso para acessar a página do Avatar
    cy.visit('http://localhost:3000/base-components/avatar');
    // Renderização do Avatar
    cy.get('#4697-should').shadow().find('[data-test="should-avatar"]')
  });
});
