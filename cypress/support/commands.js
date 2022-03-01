// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
Cypress.Commands.add("login", (login, senha) =>{
    cy.visit('http://10.0.50.22/')
    cy.get('#login-page > .middle-box > :nth-child(1) > form.ng-pristine > :nth-child(1) > .form-control').type(login)
    cy.get('.ng-invalid.ng-dirty > :nth-child(2) > .form-control').type(senha)
    cy.get('#btn_login > .ng-binding').click()
})

Cypress.Commands.add('verificar_task', (task_name , task_element, task_response) => {

    cy.get('.navbar-minimalize').click()
    cy.get('[ng-class="{active: main.activeRoute(\'tasks\')}"] > a').click()
  
    cy.get('.table tr.ng-scope').contains(task_name + task_element).should('exist')
    cy.get('.table tr.ng-scope').contains(task_name + task_element).parent().parent()
    .find('.text-center')
    .contains(task_response).should('exist')
})  
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
