describe('Test component', () => {
  it('should click on the button to test the Input Phone Number component', () => {
    // Aviso para acessar a página do Input Phone Number
    cy.visit('http://localhost:3000/team-components/input-phone-number');
    // Renderização do input
    cy.get('#5478-input-phone-number').shadow().find('[data-test="should-input-phone-number"]')
    // Renderização do seletor de bandeira
    cy.get('#5478-input-phone-number').shadow().find('[data-test="should-select-flag"]')
  });
});
