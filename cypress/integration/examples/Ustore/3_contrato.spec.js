/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('deve criar um contrato', () =>{
    loginPage()
    cy.get('[ng-click="main.admin = !main.admin"]').click()
    cy.get('[ng-show="main.userCanSeeCompanyAdmin()"] > .ng-binding').click()
    cy.get('.col-md-2 > .btn').click()
    cy.get('#group_name').type('matheus0206')
    cy.get('#group_contactname').type('teste')
    cy.get('#group_cpfCnpj').type('46.494.542/0001-69')
    cy.get('#company_invoice_day').type('10')
    cy.get(':nth-child(1) > .form-group.input-group').type('root')
    cy.get('.dropdown-menu > .active > .ng-binding').click()
    cy.get('.input-group.ng-binding > .check').click()
    // cy.get('.modal-footer > .btn-success')


})