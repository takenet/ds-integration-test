describe('Test component', () => {
  it('should click on the button to test the Input component', () => {
    // Aviso para acessar a página do Input
    cy.visit('http://localhost:3000/base-components/input');
    // Clicar para abrir Input
    cy.get('#3721-should').shadow().find('[data-test="open-input"]')
  });
});
