describe('Test component', () => {
  it('should click on the button to test the Toast component', () => {
    // Aviso para acessar a página do Toast
    cy.visit('http://localhost:3000/team-components/toast');
    // Renderização do button close
    cy.get('#9362-toast').shadow().find('[dt-button-close="should-button-close"]')
  });
});
