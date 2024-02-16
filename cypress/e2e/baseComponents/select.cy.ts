describe('Test component', () => {
  it('should click on the button to test the Select component', () => {
    // Aviso para acessar a página do Select
    cy.visit('http://localhost:3000/base-components/select');
    // Clicar para abrir Select
    cy.get('#9674-should').shadow().find('[data-test="open-select"]')
  });
});
