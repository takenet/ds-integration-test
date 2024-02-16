describe('Test component', () => {
  it('should click on the button to test the Typo component', () => {
    // Aviso para acessar a página do Typo
    cy.visit('http://localhost:3000/base-components/typo');
    // Clicar para abrir Typo
    cy.get('#5137-should').shadow().find('[data-test="open-typo"]')
  });
});
