/// <reference types="cypress" />
import { loginPage } from '../../../util.js';

const findAccordion = (number) => {
    return `#resources_accordion > .panel-group > :nth-child(${number}) > :nth-child(1) > :nth-child(1) > a`;
}

it('Deve editar um VDC', () =>{
    loginPage()

    cy.get(`[ng-class="{active: main.activeRoute('virtual-datacenters')}"] > a > .nav-label`).click()
    cy.get(`:nth-child(14) > [ng-click="main.goto('/virtual-datacenters/' + row.ucloudIdentifier)"]`).click()
    cy.get('.bg-teal').click()
    cy.wait(4000)
    cy.get('#vdc-container').select('Openstack 8 - https://identity.spo1.flexcloud.com.br:5000/v3/;eb737fb910d747eea82f025ca0f6faa5;e597cd92efb04fe4b8410392714a0857')
    // cy.get(findAccordion(1)).click()
    // cy.get('#host_table > .col-md-12 > .row > .table > thead.ng-scope > .ng-table-sort-header > :nth-child(1) > div.ng-scope > .check').click()
    cy.get(findAccordion(3)).click()
    cy.get('#template_table > .col-md-12 > .row > .table > thead.ng-scope > .ng-table-sort-header > :nth-child(1) > div.ng-scope > .check').click()
    cy.get(findAccordion(4)).click()
    cy.get('#network_table > .col-md-12 > .row > .table > tbody > [style=""] > [width="30"] > .check').click()
    cy.get('#network_table > .col-md-12 > .row > .table > tbody > :nth-child(2) > [width="30"] > .check').click()
    cy.get('#network_table > .col-md-12 > .row > .table > tbody > :nth-child(3) > [width="30"] > .check').click()
    // cy.get('#network_table > .col-md-12 > .row > .table > tbody > :nth-child(4) > [width="30"] > .check').click()
    cy.get(findAccordion(5)).click()
    cy.get('#storage_table > .col-md-12 > .row > .table > tbody > [style=""] > [width="30"] > .check').click()
    cy.get('#storage_table > .col-md-12 > .row > .table > tbody > :nth-child(2) > [width="30"] > .check').click()
    cy.get('#storage_table > .col-md-12 > .row > .table > tbody > :nth-child(3) > [width="30"] > .check').click()
    cy.get(findAccordion(6)).click()
    cy.get('#flavor_table > .col-md-12 > .row > .ng-isolate-scope > [ng-include="templateUrl"] > .ng-table-pager > .ng-table-counts > :nth-child(2) > .ng-binding').click()
    cy.get(':nth-child(22) > [width="30"] > .check').click()
    cy.get(':nth-child(23) > [width="30"] > .check').click()
    cy.get('.modal-footer > .btn-success').click()
})
