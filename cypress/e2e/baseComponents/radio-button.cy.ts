describe('Test component', () => {
  it('should click on the button to test the Radio Button component', () => {
    // Aviso para acessar a página do Radio Button
    cy.visit('http://localhost:3000/base-components/radio-button');
    // Clicar para abrir Radio Button
    cy.get('#6173-should').shadow().find('[data-test="open-radio-button"]')
  });
});
