describe('Test component', () => {
  it('should click on the button to test the Card component', () => {
    // Aviso para acessar a página do Card
    cy.visit('http://localhost:3000/base-components/card');
    // Renderização do Card
    cy.get('#5432-card').shadow().find('[data-test="should-card"]')
  });
});
