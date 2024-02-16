describe('Test component', () => {
  it('should click on the button to test the Progress Bar component', () => {
    // Aviso para acessar a página do Progress Bar
    cy.visit('http://localhost:3000/base-components/progress-bar');
    // Clicar para abrir Progress Bar
    cy.get('#9437-should').shadow().find('[data-test="open-progress-bar"]')
  });
});
