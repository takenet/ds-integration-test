describe('Test component', () => {
  it('should click on the button to test the Banner component', () => {
    // Aviso para acessar a página do Banner
    cy.visit('http://localhost:3000/team-components/banner');
    // Renderização do button close
    cy.get('#1628-banner').shadow().find('[dt-button-close="should-button-close"]')
  });
});
