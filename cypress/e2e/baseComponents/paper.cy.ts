describe('Test component', () => {
  it('should click on the button to test the Paper component', () => {
    // Aviso para acessar a página do Paper
    cy.visit('http://localhost:3000/base-components/paper');
    // Clicar para abrir Paper
    cy.get('#6487-should').shadow().find('[data-test="open-paper"]')
  });
});
