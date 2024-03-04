describe('Test component', () => {
  it('should click on the button to test the Chip Clickable Close component', () => {
    // Aviso para acessar a página do Chip Clickable Close
    cy.visit('http://localhost:3000/team-components/chipclickable');
    // Renderização do button-close
    cy.get('#4396-chip-close').shadow().find('[data-test="should-button-close"]')
  });
});
