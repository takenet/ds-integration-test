describe('Test component', () => {
  it('should click on the button to test the Badge component', () => {
    // Aviso para acessar a página do Badge
    cy.visit('http://localhost:3000/base-components/badge');
    // Renderização do Badge
    cy.get('#3419-badge').shadow().find('[data-test="should-badge"]')
  });
});
