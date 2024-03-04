describe('Test component', () => {
  it('should click on the button to test the Tabs component', () => {
    // Aviso para acessar a página do Tabs
    cy.visit('http://localhost:3000/team-components/tabs');
    // Renderização do button next
    cy.get('#8563-tabs').shadow().find('[data-test="should-button-next"]')
    // Click to enable prev
    cy.get('#8563-tabs').shadow().find('[data-test="should-button-next"]').click()
    // Renderização do button prev
    cy.get('#8563-tabs').shadow().find('[data-test="should-button-prev"]')
  });
});
