describe('Test component', () => {
  it('should click on the button to test the Navbar component', () => {
    // Aviso para acessar a página do Navbar
    cy.visit('http://localhost:3000/base-components/navbar');
    // Renderização do Navbar
    cy.get('#2547-navbar').shadow().find('[data-test="should-navbar"]')
  });
});
