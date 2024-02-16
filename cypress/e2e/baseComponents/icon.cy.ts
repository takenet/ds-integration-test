describe('Test component', () => {
  it('should click on the button to test the Icon component', () => {
    // Aviso para acessar a página do Icon
    cy.visit('http://localhost:3000/base-components/icon');
    // Clicar para abrir Icon
    cy.get('#3278-should').shadow().find('[data-test="open-icon"]')
  });
});
