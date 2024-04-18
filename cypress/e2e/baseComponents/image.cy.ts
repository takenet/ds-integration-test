describe('Test component', () => {
  it('should click on the button to test the Image component', () => {
    // Aviso para acessar a página do Image
    cy.visit('http://localhost:3000/base-components/image');
    // Renderização do Image
    cy.get('#6578-image').shadow().find('[data-test="should-image"]')
  });
});
