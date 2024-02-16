describe('Test component', () => {
  it('should click on the button to test the Select Chips component', () => {
    // Aviso para acessar a página do Select Chips
    cy.visit('http://localhost:3000/base-components/select-chips');
    // Clicar para abrir Select Chips
    cy.get('#7645-should').shadow().find('[data-test="open-select-chips"]')
  });
});
