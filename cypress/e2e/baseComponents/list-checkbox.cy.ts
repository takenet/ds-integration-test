describe('Test component', () => {
  it('should click on the button to test the List Checkbox component', () => {
    // Aviso para acessar a página do List Checkbox
    cy.visit('http://localhost:3000/base-components/list-checkbox');
    // Clicar para abrir List Checkbox
    cy.get('#4645-should').shadow().find('[data-test="open-list-checkbox"]')
  });
});
