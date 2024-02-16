describe('Test component', () => {
  it('should click on the button to test the Loading Spinner component', () => {
    // Aviso para acessar a página do Loading Spinner
    cy.visit('http://localhost:3000/base-components/loading-spinner');
    // Clicar para abrir Loading Spinner
    cy.get('#3297-should').shadow().find('[data-test="open-loading-spinner"]')
  });
});
