describe('Test component', () => {
  it('should click on the button to test the List component', () => {
    // Aviso para acessar a página do List
    cy.visit('http://localhost:3000/base-components/list');
    // Clicar para abrir List
    cy.get('#6598-should').shadow().find('[data-test="open-list"]')
  });
});
