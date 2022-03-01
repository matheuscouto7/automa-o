/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

it('Deve editar uma REDE', () =>{
    loginPage()

    cy.get('[ng-click="main.network = !main.network"]').click()
    cy.get('[ng-show="main.hasPermission(144002)"] > .ng-binding').click()
    cy.get('[heading="Openstack"] > .ng-binding').click()
    cy.wait(500)
    cy.get('.tab-pane.active > [ng-include="tab.content"] > .box-body > #example1_wrapper > .col-md-12 > .row > .table > thead.ng-scope > .ng-table-filters > [data-title-text="Nome"] > .filter-cell > .input-filter').type('matheus')
    cy.get(`.tab-pane.active > [ng-include="tab.content"] > .box-body > #example1_wrapper > .col-md-12 > .row > .table > tbody > :nth-child(1) > [data-title="'NAME' | translate"]`).click()
    cy.get('.text-center > .btn-default > .fa').click()
    cy.get(':nth-child(1) > .input-group > .form-control').type('matheus')
    // cy.get('.text-center > .btn-success').click()
})
