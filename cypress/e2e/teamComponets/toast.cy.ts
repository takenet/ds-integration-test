describe('Test component', () => {
  it('should click on the button to test the Toast component', () => {
    // Aviso para acessar a página do Toast
    cy.visit('http://localhost:3000/team-components/toast');
    // Clicar para abrir Button
    cy.get('#2178-should').shadow().find('[data-test="should-button"]').click()

    cy.wait(1000)

    // Renderização do button action
    cy.get('#9362-toast').shadow().find('[data-test="should-button-action"]')
  });
});
