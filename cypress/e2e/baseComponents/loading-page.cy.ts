describe('Test component', () => {
  it('should click on the button to test the Loading Page component', () => {
    // Aviso para acessar a página do Loading Page
    cy.visit('http://localhost:3000/base-components/loading-page');
    // Clicar para abrir Loading Page
    cy.get('#6498-should').shadow().find('[data-test="open-loading-page"]')
  });
});
