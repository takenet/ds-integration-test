describe('Test component', () => {
  it('should click on the button to test the Pagination component', () => {
    // Aviso para acessar a página do Pagination
    cy.visit('http://localhost:3000/team-components/pagination');
    // Renderização do button initial
    cy.get('#9164-pagination').shadow().find('[dt-button-initial="should-button-initial"]')
    // Renderização do button prev
    cy.get('#9164-pagination').shadow().find('[dt-button-prev="should-button-prev"]')
    // Renderização do select number
    cy.get('#9164-pagination').shadow().find('[dt-select-number="should-select-number"]')
    // Renderização do button next
    cy.get('#9164-pagination').shadow().find('[dt-button-next="should-button-next"]')
    // Renderização do button end
    cy.get('#9164-pagination').shadow().find('[dt-button-end="should-button-end"]')
  });
});
