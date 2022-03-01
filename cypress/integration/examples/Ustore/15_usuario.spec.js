/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve criar um Usuario', () =>{
    loginPage()

    cy.get('[ng-click="main.admin = !main.admin"]').click()
    cy.get(`[ng-show="((main.containsViewConfigUser() && main.modulesVisible.includes('administration')) || (!main.containsViewConfigUser()))"] > .nav > :nth-child(1) > .ng-binding`).click()
    // cy.get(`[ng-if="!main.hasRole(471) && ((main.containsViewConfigUser() && main.modulesVisible.includes('administration')) || (!main.containsViewConfigUser()))"] > .nav > :nth-child(1) > .ng-binding`).click()
    cy.get('.col-md-2 > .btn').click()
    cy.get('#selectRole > .form-control').select('User')
    cy.get('.form-group.input-group').type('couto03')
    cy.get('.ng-binding > strong').click()
    cy.get(':nth-child(4) > .form-control').type('matheus')
    cy.get('#user_login').type('matheus')
    cy.get('#user_pass').click()
    cy.get('#user_pass').type('BHU*')
    cy.get('#user_confirm_pass').click()
    cy.get('#user_confirm_pass').type('BHU*')
    cy.get(':nth-child(8) > .form-control').type('matheus@usto.re')
    cy.get(':nth-child(9) > .form-control').type('81996152805')
    cy.get(':nth-child(10) > .form-control').type('teste')
    cy.get(':nth-child(11) > .form-control').type('ustore')
    cy.get('#selectQuota > .form-control').select('Cota de Grupo')
    cy.get('div.ng-scope > .check').click()
    // cy.get('.modal-footer > .btn-success').click()
})