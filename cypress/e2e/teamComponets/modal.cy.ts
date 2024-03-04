describe('Test component', () => {
  it('should click on the button to test the Modal component', () => {
    // Aviso para acessar a página do Modal
    cy.visit('http://localhost:3000/team-components/modal');
    // Renderização do outzone
    cy.get('#4852-modal').shadow().find('[data-test="should-outzone"]')
    // Renderização do button close
    cy.get('#4852-modal').shadow().find('[data-test="should-button-close"]')
  });
});
