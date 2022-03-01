/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve fazer o login', () =>{
    loginPage()
 // Menu de Usuário
    cy.get('.navbar-minimalize').click()
    cy.get('#networkNav').click()
    cy.get('.navbar-minimalize > .fa').click()

    cy.get('[ng-class="{active: main.network}"] > .nav > :nth-child(3) > .ng-binding').click()
    cy.get('h4 > .ng-binding').click()
    cy.wait(4000)
    cy.get('.col-sm-12 > :nth-child(2) > .form-control').select('Tavora - AWS')
    cy.wait(5000)
    cy.get('#network-vdcs').select('TesteAWSC')
    cy.get(':nth-child(4) > .form-control').select('South America (São Paulo) - sa-east-1')
    cy.get('.col-sm-12 > :nth-child(6)').click()
    cy.wait(4000)
    cy.get(':nth-child(6) > .form-control').select('coutoaws2108')
    cy.get('#group_name').type('matheus')
    cy.get('#group_description').clear()
    cy.get('#group_description').type('teste')
    cy.get('.active > .box > .box-header').click()
    cy.get('.active > .box > .box-header > h4 > .btn').click()
    cy.get('.active > .box > .box-body > .table > tbody > .ng-scope > :nth-child(1) > .input-group > .form-control').select('All Protocols')
    cy.get('.modal-footer > .btn-success > .fa').click()
    /* ==== End Cypress Studio ==== */
  });


