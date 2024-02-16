describe('Test component', () => {
  it('should click on the button to test the Switch component', () => {
    // Aviso para acessar a página do Switch
    cy.visit('http://localhost:3000/base-components/switch');
    // Clicar para abrir Switch
    cy.get('#5258-should').shadow().find('[data-test="open-switch"]')
  });
});
