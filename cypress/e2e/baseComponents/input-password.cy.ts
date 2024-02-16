describe('Test component', () => {
  it('should click on the button to test the Input Password component', () => {
    // Aviso para acessar a página do Input Password
    cy.visit('http://localhost:3000/base-components/input-password');
    // Clicar para abrir Input Password
    cy.get('#1964-should').shadow().find('[data-test="open-input-password"]')
  });
});
