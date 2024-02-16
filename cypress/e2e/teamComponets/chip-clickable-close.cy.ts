describe('Test component', () => {
  it('should click on the button to test the Chip Clickable Close component', () => {
    // Aviso para acessar a página do Chip Clickable Close
    cy.visit('http://localhost:3000/team-components/chip-clickable-close');
    // Renderização do button-close
    cy.get('#4396-chip-close').shadow().find('[dt-button-close="should-button-close"]')
  });
});
