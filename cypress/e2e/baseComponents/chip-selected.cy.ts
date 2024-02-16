describe('Test component', () => {
  it('should click on the chip-selected to test the Chip Selected component', () => {
    // Aviso para acessar a página do Chip Selected
    cy.visit('http://localhost:3000/base-components/chip-selected');
    // Clicar para abrir Chip Selected
    cy.get('#2178-should').shadow().find('[data-test="should-chip-selected"]')
  });
});
