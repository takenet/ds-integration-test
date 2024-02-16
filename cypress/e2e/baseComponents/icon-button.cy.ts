describe('Test component', () => {
  it('should click on the button to test the Icon Button component', () => {
    // Aviso para acessar a página do Icon Button
    cy.visit('http://localhost:3000/base-components/icon-button');
    // Clicar para abrir Icon Button
    cy.get('#7945-should').shadow().find('[data-test="open-icon-button"]')
  });
});
