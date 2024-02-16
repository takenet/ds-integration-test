describe('Test component', () => {
  it('should click on the button to test the Illustration component', () => {
    // Aviso para acessar a página do Illustration
    cy.visit('http://localhost:3000/base-components/illustration');
    // Clicar para abrir Illustration
    cy.get('#9137-should').shadow().find('[data-test="open-illustration"]')
  });
});
