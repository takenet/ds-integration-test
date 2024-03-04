describe('Test component', () => {
  it('should click on the button to test the Input Editable component', () => {
    // Aviso para acessar a página do Input Editable
    cy.visit('http://localhost:3000/team-components/input-editable');
    // Renderização do button edit
    cy.get('#7406-input-editable').shadow().find('[data-test="should-button-edit"]')
    // Renderização do button close
    cy.get('#7406-input-editable').shadow().find('[data-test="should-button-close"]')
    // Renderização do button confirm
    cy.get('#7406-input-editable').shadow().find('[data-test="should-button-confirm"]')
  });
});
