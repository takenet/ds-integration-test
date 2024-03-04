describe('Test component', () => {
  it('should click on the button to test the Stepper component', () => {
    // Aviso para acessar a página do Stepper
    cy.visit('http://localhost:3000/team-components/stepper');
    // Renderização do bds step
    cy.get('#8145-sidebar').find('[data-test="should-bds-step"]')
  });
});
