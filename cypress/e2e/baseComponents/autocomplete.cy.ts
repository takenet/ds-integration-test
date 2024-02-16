describe('Test component', () => {
  it('should click on the button to test the Autocomplete component', () => {
    // Aviso para acessar a página do Autocomplete
    cy.visit('http://localhost:3000/base-components/autocomplete');

    // Clicar para abrir e digitar "Finn" no Autocomplete
    cy.get('#9137-open').click()

    // Clicar para abrir e digitar "Finn" no Autocomplete
    cy.get('#9137-open').shadow().find('[data-test="open-autocomplete"]').type("Finn", { force: true })

    cy.wait(1000)

    // Verificar se opção esta habilitada em tela e clicar para selecionar.
    cy.get('#3494-option').shadow().find('[data-test="should-option"]').click()
  });
});
