describe('Test component', () => {
  it('should click on the button to test the Tooltip component', () => {
    // Aviso para acessar a página do Tooltip
    cy.visit('http://localhost:3000/base-components/tooltip');
    // Clicar para abrir Tooltip
    cy.get('#6598-should').shadow().find('[data-test="open-tooltip"]')
  });
});
