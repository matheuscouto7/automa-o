/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve editar um Grupo de Segurança', () =>{
    loginPage()

    cy.get('[ng-click="main.network = !main.network"]').click()
    cy.get('.active > .nav > :nth-child(3) > .ng-binding').click()
    cy.get('.filter-cell > .filter').select('Openstack 8')
    cy.get(`[style=""] > [data-title="'NAME' | translate"] > .ng-binding`).click()
    cy.get('h4 > .btn-primary').click()
    cy.get('#formRulesIN > .col-md-12 > .row > .box > .box-body > .table > tbody > tr.ng-scope > :nth-child(1) > .input-group > .form-control').select('All Protocols')
    // cy.get('h4 > .btn-success').click()

})
