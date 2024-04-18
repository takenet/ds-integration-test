describe('Test component', () => {
  it('should click on the button to test the Skeleton component', () => {
    // Aviso para acessar a página do Skeleton
    cy.visit('http://localhost:3000/base-components/skeleton');
    // Renderização do Skeleton
    cy.get('#4697-skeleton').shadow().find('[data-test="should-skeleton"]')
  });
});
