/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve editar um Grupo de Segurança', () =>{
    loginPage()
    cy.get('.navbar-minimalize').click()
    cy.get('#networkNav').click()
    cy.get('.navbar-minimalize > .fa').click()
    cy.get('[ng-class="{active: main.network}"] > .nav > :nth-child(3) > .ng-binding').click()
    cy.get('[data-title-text="Nome"] > .filter-cell > .input-filter').type('matheus')
    cy.get(':nth-child(1) > :nth-child(5) > .btn-default > .fa').click()
    cy.get('#formRulesIN > h4 > .btn-primary').click()
    cy.wait(1000)
    cy.get('#formRulesIN > h4 > .btn-default').click()
    cy.get(':nth-child(2) > :nth-child(1) > .input-group > .form-control').select('All TCP')
     cy.get('#formRulesIN > h4 > .btn-success').click()
     // depois editar apagar.
     cy.get(':nth-child(1) > .btn-danger').click()
     cy.get('.confirm').click()
  

})
