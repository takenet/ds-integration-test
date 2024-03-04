describe('Test component', () => {
  it('should click on the button to test the Datepicker component', () => {
    // Aviso para acessar a página do Datepicker
    cy.visit('http://localhost:3000/team-components/datepicker');
    // Renderização do input start
    cy.get('#9663-datepicker').find('[data-test="should-input-start"]')
    // Renderização do input end
    cy.get('#9663-datepicker').find('[data-test="should-input-end"]')
    // Renderização do outzone
    
    // Clicar no datepicker
    cy.get('#9663-datepicker').find('[data-test="should-input-start"]').click()
    
    cy.get('#9663-datepicker').find('[data-test="should-outzone"]')
    // Renderização do button-prev
    cy.get('#9663-datepicker').find('[data-test="should-button-prev"]')
    // Renderização do button-next
    cy.get('#9663-datepicker').find('[data-test="should-button-next"]')
    // Renderização do select-month
    cy.get('#9663-datepicker').find('[data-test="should-select-month"]')
    // Renderização do select-year
    cy.get('#9663-datepicker').find('[data-test="should-select-year"]')
    // Renderização do button-clear
    cy.get('#9663-datepicker').find('[data-test="should-button-clear"]')
    // Renderização do button-confirm
    cy.get('#9663-datepicker').find('[data-test="should-button-confirm"]')
  });
});
