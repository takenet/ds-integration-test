describe('Test component', () => {
  it('should click on the button to test the Dropdown component', () => {
    // Aviso para acessar a página do Dropdown
    cy.visit('http://localhost:3000/base-components/dropdown');
    // Renderização do Dropdown
    cy.get('#3746-dropdown').shadow().find('[data-test="should-dropdown"]')
  });
});
