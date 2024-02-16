describe('Test component', () => {
  it('should click on the button to test the Alert component', () => {
    // Aviso para acessar a página do Alert
    cy.visit('http://localhost:3000/base-components/alert');
    // Clicar para abrir Alert
    cy.get('#5689-open').shadow().find('[data-test="open-alert"]').click()

    cy.wait(1000)

    // Verificar componente renderizado
    cy.get('#4185-alert').should("have.prop", 'open', true)

    // Clicar para fechar Alert
    cy.get('#4598-close').shadow().find('[data-test="close-alert"]').click()

    cy.wait(1000)

    // Verificar componente renderizado
    cy.get('#4185-alert').should("have.prop", 'open', false)
  });
});
