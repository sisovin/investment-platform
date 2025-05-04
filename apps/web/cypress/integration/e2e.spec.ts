describe('E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the login page', () => {
    cy.contains('Login').should('be.visible');
  });

  it('should login successfully', () => {
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password');
    cy.get('button[type="submit"]').click();
    cy.contains('Dashboard').should('be.visible');
  });

  it('should display the register page', () => {
    cy.contains('Register').click();
    cy.contains('Register').should('be.visible');
  });

  it('should register successfully', () => {
    cy.contains('Register').click();
    cy.get('input[name="email"]').type('newuser@example.com');
    cy.get('input[name="password"]').type('password');
    cy.get('input[name="confirmPassword"]').type('password');
    cy.get('button[type="submit"]').click();
    cy.contains('Dashboard').should('be.visible');
  });

  it('should display the investments list', () => {
    cy.contains('Investments').click();
    cy.contains('Investment List').should('be.visible');
  });

  it('should display investment details', () => {
    cy.contains('Investments').click();
    cy.get('.investment-item').first().click();
    cy.contains('Investment Details').should('be.visible');
  });

  it('should create a new investment', () => {
    cy.contains('Investments').click();
    cy.contains('Add Investment').click();
    cy.get('input[name="amount"]').type('1000');
    cy.get('button[type="submit"]').click();
    cy.contains('Investment List').should('be.visible');
  });

  it('should update an investment', () => {
    cy.contains('Investments').click();
    cy.get('.investment-item').first().click();
    cy.contains('Edit Investment').click();
    cy.get('input[name="amount"]').clear().type('2000');
    cy.get('button[type="submit"]').click();
    cy.contains('Investment Details').should('be.visible');
  });

  it('should delete an investment', () => {
    cy.contains('Investments').click();
    cy.get('.investment-item').first().click();
    cy.contains('Delete Investment').click();
    cy.contains('Investment List').should('be.visible');
  });
});
