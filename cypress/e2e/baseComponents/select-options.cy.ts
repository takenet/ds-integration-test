describe('Test component', () => {
  it('should click on the button to test the Select Options component', () => {
    // Aviso para acessar a página do Select Options
    cy.visit('http://localhost:3000/base-components/select-options');
    // Clicar para abrir Select Options
    cy.get('#1319-should').shadow().find('[data-test="open-select-options"]')
  });
});
