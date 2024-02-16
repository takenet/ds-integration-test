describe('Test component', () => {
  it('should click on the button to test the Input Chips component', () => {
    // Aviso para acessar a página do Input Chips
    cy.visit('http://localhost:3000/team-components/input-chips');
    // Renderização do button close
    cy.get('#1628-input-chips').shadow().find('[dt-button-close="should-button-close"]')
  });
});
