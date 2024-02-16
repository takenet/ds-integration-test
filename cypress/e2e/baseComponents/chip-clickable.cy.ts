describe('Test component', () => {
  it('should click on the chip-clickable to test the Chip Clickable component', () => {
    // Aviso para acessar a página do Chip Clickable
    cy.visit('http://localhost:3000/base-components/chip-clickable');
    // Clicar para abrir Chip Clickable
    cy.get('#2178-should').shadow().find('[data-test="should-chip-clickable"]')
  });
});
