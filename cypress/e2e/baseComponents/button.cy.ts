describe('Test component', () => {
  it('should click on the button to test the Button component', () => {
    // Aviso para acessar a página do Button
    cy.visit('http://localhost:3000/base-components/button');
    // Clicar para abrir Button
    cy.get('#2178-should').shadow().find('[data-test="should-button"]')
  });
});
