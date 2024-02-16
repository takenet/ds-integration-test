describe('Test component', () => {
  it('should click on the button to test the Loading Bar component', () => {
    // Aviso para acessar a página do Loading Bar
    cy.visit('http://localhost:3000/base-components/loading-bar');
    // Clicar para abrir Loading Bar
    cy.get('#7837-should').shadow().find('[data-test="open-loading-bar"]')
  });
});
