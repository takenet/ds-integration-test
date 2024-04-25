describe('Test component', () => {
  it('should click on the button to test the Accordion component', () => {
    // Aviso para acessar a página do Accordion
    cy.visit('http://localhost:3000/base-components/accordion');
    // Renderização do Accordion
    cy.get('#5498-accordion-header').shadow().find('[data-test="accordion-header"]')
  });
});
