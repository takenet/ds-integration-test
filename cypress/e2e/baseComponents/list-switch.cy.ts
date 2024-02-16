describe('Test component', () => {
  it('should click on the button to test the List Switch component', () => {
    // Aviso para acessar a página do List Switch
    cy.visit('http://localhost:3000/base-components/list-switch');
    // Clicar para abrir List Switch
    cy.get('#2145-should').shadow().find('[data-test="open-list-switch"]')
  });
});
