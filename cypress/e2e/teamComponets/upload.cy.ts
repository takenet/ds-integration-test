describe('Test component', () => {
  it('should click on the button to test the Upload component', () => {
    // Aviso para acessar a página do Upload
    cy.visit('http://localhost:3000/team-components/upload');
    // Renderização do input files
    cy.get('#8765-upload').shadow().find('[data-test="input-files"]')
    // Renderização do label add file
    cy.get('#8765-upload').shadow().find('[data-test="label-add-file"]')
    // Renderização do button delete
    cy.get('#8765-upload').shadow().find('[data-test="button-delete"]')
  });
});
