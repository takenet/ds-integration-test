describe('Test component', () => {
  it('should click on the button to test the Sidebar component', () => {
    // Aviso para acessar a página do Sidebar
    cy.visit('http://localhost:3000/team-components/sidebar');
    // Renderização do outzone
    cy.get('#8145-sidebar').shadow().find('[dt-outzone="should-outzone"]')
    // Renderização do button close
    cy.get('#8145-sidebar').shadow().find('[dt-button-close="should-button-close"]')
  });
});
