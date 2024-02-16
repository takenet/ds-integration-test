describe('Test component', () => {
  it('should click on the button to test the Datepicker component', () => {
    // Aviso para acessar a página do Datepicker
    cy.visit('http://localhost:3000/team-components/datepicker');
    // Renderização do input start
    cy.get('#9663-datepicker').shadow().find('[dt-input-start="should-input-start"]')
    // Renderização do input end
    cy.get('#9663-datepicker').shadow().find('[dt-input-end="should-input-end"]')
    // Renderização do outzone
    cy.get('#9663-datepicker').shadow().find('[dt-outzone="should-outzone"]')
    // Renderização do button-prev
    cy.get('#9663-datepicker').shadow().find('[dt-button-prev="should-button-prev"]')
    // Renderização do button-next
    cy.get('#9663-datepicker').shadow().find('[dt-button-next="should-button-next"]')
    // Renderização do select-month
    cy.get('#9663-datepicker').shadow().find('[dt-select-month="should-select-month"]')
    // Renderização do select-year
    cy.get('#9663-datepicker').shadow().find('[dt-select-year="should-select-year"]')
    // Renderização do button-clear
    cy.get('#9663-datepicker').shadow().find('[dt-button-clear="should-button-clear"]')
    // Renderização do button-confirm
    cy.get('#9663-datepicker').shadow().find('[dt-button-confirm="should-button-confirm"]')
  });
});
