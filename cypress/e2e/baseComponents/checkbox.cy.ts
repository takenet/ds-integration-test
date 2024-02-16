describe('Test component', () => {
  it('should render and test iterations Checkbox component', () => {
    // Aviso para acessar a página do Checkbox
    cy.visit('http://localhost:3000/base-components/checkbox');
    // Clicar para abrir Checkbox
    cy.get('#2378-should').shadow().find('[data-test="should-checkbox"]')
  });
});
