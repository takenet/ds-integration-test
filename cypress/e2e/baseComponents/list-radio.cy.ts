describe('Test component', () => {
  it('should click on the button to test the List Radio component', () => {
    // Aviso para acessar a página do List Radio
    cy.visit('http://localhost:3000/base-components/list-radio');
    // Clicar para abrir List Radio
    cy.get('#3219-should').shadow().find('[data-test="open-list-radio"]')
  });
});
