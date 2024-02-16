describe('Test component', () => {
  it('should click on the button to test the Tabs component', () => {
    // Aviso para acessar a página do Tabs
    cy.visit('http://localhost:3000/team-components/tabs');
    // Renderização do button prev
    cy.get('#8563-tabs').shadow().find('[dt-button-prev="should-button-prev"]')
    // Renderização do button next
    cy.get('#8563-tabs').shadow().find('[dt-button-next="should-button-next"]')
  });
});
