describe('Test component', () => {
  it('should click on the button to test the Chip Tag component', () => {
    // Aviso para acessar a página do Chip Tag
    cy.visit('http://localhost:3000/base-components/chip-tag');
    // Clicar para abrir Chip Tag
    cy.get('#9821-should').shadow().find('[data-test="open-chip-tag"]')
  });
});
