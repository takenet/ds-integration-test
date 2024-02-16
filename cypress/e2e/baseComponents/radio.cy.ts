describe('Test component', () => {
  it('should click on the button to test the Radio component', () => {
    // Aviso para acessar a página do Radio
    cy.visit('http://localhost:3000/base-components/radio');
    // Clicar para abrir Radio
    cy.get('#4394-should').shadow().find('[data-test="open-radio"]')
  });
});
